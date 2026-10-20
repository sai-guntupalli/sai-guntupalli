import {
  ChartLineUp,
  Database,
  GraduationCap,
  Robot,
} from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/lib/content";

const icons = {
  agent: Robot,
  fund: ChartLineUp,
  mentor: GraduationCap,
  pipeline: Database,
} as const;

export function ProjectIcon({ icon }: { icon: Project["icon"] }) {
  const Icon = icons[icon];

  return (
    <span className="icon-chip" aria-hidden>
      <Icon size={20} weight="regular" />
    </span>
  );
}