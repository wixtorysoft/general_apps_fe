import {
  TrendingUp,
  Save,
  RotateCcw,
  Blocks,
  RefreshCw,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface FeatureData {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
  gradient: string;
  hoverAccent: string;
}

export const features: FeatureData[] = [
  {
    titleKey: "feat1_title",
    descKey: "feat1_desc",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-500",
    hoverAccent: "rgba(16, 185, 129, 0.15)",
  },
  {
    titleKey: "feat2_title",
    descKey: "feat2_desc",
    icon: Save,
    gradient: "from-rose-500 to-orange-500",
    hoverAccent: "rgba(244, 63, 94, 0.15)",
  },
  {
    titleKey: "feat3_title",
    descKey: "feat3_desc",
    icon: RotateCcw,
    gradient: "from-cyan-500 to-sky-500",
    hoverAccent: "rgba(6, 182, 212, 0.15)",
  },
  {
    titleKey: "feat4_title",
    descKey: "feat4_desc",
    icon: Blocks,
    gradient: "from-violet-500 to-purple-500",
    hoverAccent: "rgba(139, 92, 246, 0.15)",
  },
  {
    titleKey: "feat5_title",
    descKey: "feat5_desc",
    icon: RefreshCw,
    gradient: "from-amber-500 to-yellow-500",
    hoverAccent: "rgba(245, 158, 11, 0.15)",
  },
  {
    titleKey: "feat6_title",
    descKey: "feat6_desc",
    icon: Sparkles,
    gradient: "from-teal-500 to-cyan-500",
    hoverAccent: "rgba(20, 184, 166, 0.15)",
  },
];
