import {
  Gamepad2,
  Brain,
  Clock,
  UserCog,
  Globe,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

export interface AdvantageData {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
  gradient: string;
  hoverBorder: string;
  hoverAccent: string;
}

export const advantages: AdvantageData[] = [
  {
    titleKey: "advantage1_title",
    descKey: "advantage1_desc",
    icon: Gamepad2,
    gradient: "from-emerald-500 to-teal-500",
    hoverBorder: "hover:border-emerald-400/30",
    hoverAccent: "rgba(16, 185, 129, 0.15)",
  },
  {
    titleKey: "advantage2_title",
    descKey: "advantage2_desc",
    icon: Brain,
    gradient: "from-cyan-500 to-sky-500",
    hoverBorder: "hover:border-cyan-400/30",
    hoverAccent: "rgba(6, 182, 212, 0.15)",
  },
  {
    titleKey: "advantage3_title",
    descKey: "advantage3_desc",
    icon: Clock,
    gradient: "from-amber-500 to-orange-500",
    hoverBorder: "hover:border-amber-400/30",
    hoverAccent: "rgba(245, 158, 11, 0.15)",
  },
  {
    titleKey: "advantage4_title",
    descKey: "advantage4_desc",
    icon: UserCog,
    gradient: "from-violet-500 to-purple-500",
    hoverBorder: "hover:border-violet-400/30",
    hoverAccent: "rgba(139, 92, 246, 0.15)",
  },
  {
    titleKey: "advantage5_title",
    descKey: "advantage5_desc",
    icon: Globe,
    gradient: "from-rose-500 to-pink-500",
    hoverBorder: "hover:border-rose-400/30",
    hoverAccent: "rgba(244, 63, 94, 0.15)",
  },
  {
    titleKey: "advantage6_title",
    descKey: "advantage6_desc",
    icon: RefreshCw,
    gradient: "from-teal-500 to-emerald-500",
    hoverBorder: "hover:border-teal-400/30",
    hoverAccent: "rgba(20, 184, 166, 0.15)",
  },
];
