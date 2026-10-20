/* ==========================================================================
 * Sai Guntupalli — portfolio interactions (vanilla JS, no dependencies)
 * 1. Applies SITE_CONFIG (defined at the top of index.html).
 * 2. Mobile nav toggle.
 * 3. Experience section: expand/collapse (hover on desktop, tap/keyboard
 *    everywhere) — hover is only wired when the device actually supports it.
 * 4. Footer year.
 * 5. Theme toggle. The initial palette is applied by a small inline script in
 *    the <head> so it lands before first paint; this only handles switching.
 * ======================================================================== */

(function () {
  "use strict";

  /* ---------- 1. Site config (LinkedIn URL etc.) ---------- */
  const SITE = (window.SITE_CONFIG || {});
  document.querySelectorAll('a[data-link="linkedin"]').forEach((a) => {
    if (SITE.linkedinUrl) a.href = SITE.linkedinUrl;
  });

  /* ---------- 2. Mobile nav ---------- */
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");

  if (header && navToggle && navLinks) {
    const setNavOpen = (open) => {
      header.dataset.navOpen = String(open);
      navToggle.setAttribute("aria-expanded", String(open));
    };

    navToggle.addEventListener("click", () => {
      setNavOpen(header.dataset.navOpen !== "true");
    });

    // Close the menu when a link is chosen, when clicking outside,
    // or when Escape is pressed.
    navLinks.addEventListener("click", (event) => {
      if (event.target.closest("a")) setNavOpen(false);
    });
    document.addEventListener("pointerdown", (event) => {
      if (header.dataset.navOpen === "true" && !header.contains(event.target)) {
        setNavOpen(false);
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && header.dataset.navOpen === "true") {
        setNavOpen(false);
        navToggle.focus();
      }
    });
  }

  /* ---------- 3. Experience expand/collapse ----------
   * State per item:
   *   toggled   — has the user clicked (pin) yet?
   *   userOpen  — the pinned state set by clicks
   * Visual state = userOpen (if pinned)
   *              ?? defaultOpen (first item)
   *              ?? hovered/focused
   * aria-expanded reflects the pin/default state so screen readers are not
   * spammed by transient hover changes; focus/tap still expands visibly.
   */
  const xpItems = Array.from(document.querySelectorAll("[data-xp]"));
  const supportsHover =
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  xpItems.forEach((item, index) => {
    const toggle = item.querySelector(".xp-toggle");
    if (!toggle) return;
    item._defaultOpen = item.classList.contains("xp-item--default") || index === 0;
    item._toggled = false;
    item._userOpen = false;

    const applyVisual = (open, { syncAria = false } = {}) => {
      item.classList.toggle("open", open);
      if (syncAria) toggle.setAttribute("aria-expanded", String(open));
    };

    const pinnedOpen = () => (item._toggled ? item._userOpen : item._defaultOpen);

    // Initial render (no-JS fallback: CSS keeps everything expanded).
    applyVisual(item._defaultOpen, { syncAria: true });

    toggle.addEventListener("click", () => {
      const next = !pinnedOpen();
      item._toggled = true;
      item._userOpen = next;
      applyVisual(next, { syncAria: true });
    });

    if (supportsHover) {
      item.addEventListener("mouseenter", () => {
        if (!item._toggled) applyVisual(true);
      });
      item.addEventListener("mouseleave", () => {
        if (!item._toggled) applyVisual(item._defaultOpen);
      });
    }

    // Keyboard users: expanding on focus mirrors the hover behavior.
    // (Touch screens have no hover, so the tap-toggle above is the path.)
    item.addEventListener("focusin", () => {
      if (!item._toggled) applyVisual(true);
    });
    item.addEventListener("focusout", (event) => {
      if (!item._toggled && !item.contains(event.relatedTarget)) {
        applyVisual(item._defaultOpen);
      }
    });
  });

  /* ---------- 5. Theme toggle ---------- */
  const themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) {
    const root = document.documentElement;

    const syncThemeToggle = () => {
      const dark = root.dataset.theme === "dark";
      themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    };

    syncThemeToggle();

    themeToggle.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* Private mode / storage disabled: the choice just won't persist. */
      }
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.content = next === "dark" ? "#0e1117" : "#f7f8fb";
      syncThemeToggle();
    });
  }

  /* ---------- 6. Footer year ---------- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();