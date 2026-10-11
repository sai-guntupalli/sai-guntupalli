import Link from "next/link";
import { posts } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Blog() {
  return (
    <section className="scroll-mt-20 pb-16 sm:pb-24" id="blog">
      <div className="contain">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Blog
          </h2>
        </Reveal>

        <div className="mt-10 space-y-12">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.07}>
              <article>
                <Link
                  href={`/blog/${post.slug}`}
                  className="title-link inline-block"
                >
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {post.title}
                  </h3>
                </Link>
                <p className="mt-2 text-sm text-soft">{post.dateLabel}</p>
                <p className="mt-3 max-w-[64ch] leading-relaxed text-muted">
                  {post.excerpt}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}