"use client";

import * as React from "react";
import { Moon, Sun, Monitor, Leaf, Sparkles } from "lucide-react";
import { useTheme } from "@/components/language-box/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9 text-white/70">
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const renderIcon = () => {
    if (theme === "light") return <Sun className="h-4 w-4 text-amber-500" />;
    if (theme === "emerald") return <Leaf className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />;
    if (theme === "amber") return <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400" />;
    if (theme === "system") return <Monitor className="h-4 w-4 text-teal-500" />;
    return <Moon className="h-4 w-4 text-cyan-400" />;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="w-9 h-9 text-foreground/80 hover:text-foreground hover:bg-foreground/10 transition-colors relative rounded-lg border border-border"
          title="Toggle theme"
        >
          {renderIcon()}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-popover border-border text-popover-foreground min-w-[170px] z-50 backdrop-blur-md shadow-xl">
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`cursor-pointer flex items-center gap-2 ${theme === "dark" ? "bg-emerald-500/15 font-semibold text-emerald-400" : ""}`}
        >
          <Moon className="h-4 w-4 text-cyan-400" />
          <span>Koyu (Dark)</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`cursor-pointer flex items-center gap-2 ${theme === "light" ? "bg-emerald-500/15 font-semibold text-emerald-700 dark:text-emerald-400" : ""}`}
        >
          <Sun className="h-4 w-4 text-amber-500" />
          <span>Aydınlık (Light)</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("emerald")}
          className={`cursor-pointer flex items-center gap-2 ${theme === "emerald" ? "bg-emerald-500/20 font-semibold text-emerald-800 dark:text-emerald-400" : ""}`}
        >
          <Leaf className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <span>Ferah Zümrüt (Mint)</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("amber")}
          className={`cursor-pointer flex items-center gap-2 ${theme === "amber" ? "bg-amber-500/20 font-semibold text-amber-800 dark:text-amber-400" : ""}`}
        >
          <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <span>Sıcak Kehribar (Gold)</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`cursor-pointer flex items-center gap-2 ${theme === "system" ? "bg-emerald-500/15 font-semibold text-teal-700 dark:text-teal-400" : ""}`}
        >
          <Monitor className="h-4 w-4 text-teal-500" />
          <span>Sistem (System)</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
