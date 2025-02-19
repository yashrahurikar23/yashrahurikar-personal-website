import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
export function ModeToggle({ collapsed }: { collapsed: boolean }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn("flex items-center")}>
      <Sun className="h-5 w-5 mr-2" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="mr-2"
      />
      <Moon className="h-5 w-5 mr-2" />
    </div>
  );
}
