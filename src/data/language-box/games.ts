import {
  Puzzle,
  Paintbrush,
  Shuffle,
  Headphones,
  Volume2,
  Grid,
  Compass,
  type LucideIcon,
} from "lucide-react";

export interface GameData {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
  image?: string;
  tags: string[];
  gradient: string;
  borderColor: string;
  bgHover: string;
  tagColor: string;
  hoverAccent: string;
}

export const comingSoonGames: GameData[] = [];

export const games: GameData[] = [
  {
    titleKey: "game_compass_title",
    descKey: "game_compass_desc",
    icon: Compass,
    image: "/games/word-compass.png",
    tags: ["tag_compass", "tag_direction", "tag_vocab", "tag_all_levels"],
    gradient: "from-fuchsia-500 via-purple-500 to-amber-500",
    borderColor: "hover:border-purple-400/50",
    bgHover: "hover:bg-purple-500/5",
    tagColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    hoverAccent: "rgba(168, 85, 247, 0.2)",
  },
  {
    titleKey: "game_matrix_title",
    descKey: "game_matrix_desc",
    icon: Grid,
    image: "/games/word-matrix.png",
    tags: ["tag_matrix", "tag_vocab", "tag_all_levels"],
    gradient: "from-indigo-500 to-purple-500",
    borderColor: "hover:border-indigo-400/50",
    bgHover: "hover:bg-indigo-500/5",
    tagColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    hoverAccent: "rgba(99, 102, 241, 0.15)",
  },
  {
    titleKey: "game1_title",
    descKey: "game1_desc",
    icon: Puzzle,
    image: "/games/sentence-builder.png",
    tags: ["tag_grammar", "tag_structure", "tag_beginner"],
    gradient: "from-emerald-500 to-teal-500",
    borderColor: "hover:border-emerald-400/50",
    bgHover: "hover:bg-emerald-500/5",
    tagColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    hoverAccent: "rgba(16, 185, 129, 0.15)",
  },
  {
    titleKey: "game2_title",
    descKey: "game2_desc",
    icon: Paintbrush,
    image: "/games/sentence-completion.png",
    tags: ["tag_vocab", "tag_context", "tag_intermediate"],
    gradient: "from-rose-500 to-orange-500",
    borderColor: "hover:border-rose-400/50",
    bgHover: "hover:bg-rose-500/5",
    tagColor: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    hoverAccent: "rgba(244, 63, 94, 0.15)",
  },
  {
    titleKey: "game3_title",
    descKey: "game3_desc",
    icon: Shuffle,
    image: "/games/scrambled-word.png",
    tags: ["tag_spelling", "tag_letters", "tag_all_levels"],
    gradient: "from-amber-500 to-yellow-500",
    borderColor: "hover:border-amber-400/50",
    bgHover: "hover:bg-amber-500/5",
    tagColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    hoverAccent: "rgba(245, 158, 11, 0.15)",
  },
  {
    titleKey: "game4_title",
    descKey: "game4_desc",
    icon: Headphones,
    image: "/games/match-sentence.png",
    tags: ["tag_listening", "tag_audio", "tag_advanced"],
    gradient: "from-violet-500 to-purple-500",
    borderColor: "hover:border-violet-400/50",
    bgHover: "hover:bg-violet-500/5",
    tagColor: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    hoverAccent: "rgba(139, 92, 246, 0.15)",
  },
  {
    titleKey: "game5_title",
    descKey: "game5_desc",
    icon: Volume2,
    image: "/games/listen-word.png",
    tags: ["tag_dictation", "tag_spelling", "tag_intermediate"],
    gradient: "from-cyan-500 to-sky-500",
    borderColor: "hover:border-cyan-400/50",
    bgHover: "hover:bg-cyan-500/5",
    tagColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    hoverAccent: "rgba(6, 182, 212, 0.15)",
  },
];

