"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import {IconLightUp} from "@/components/icon/light-icon.tsx";
import {MoonIcon} from "@/components/icon/moon-icon.tsx";

type Theme = "light" | "dark" | "device";

const ThemeDropdown = () => {
  const [theme, setTheme] = useState<Theme>("device");

  const onClickLightTheme = () => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }

  const onClickDarkTheme = () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }

  const onClickDeviceTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches)
      document.documentElement.classList.remove('dark');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'device');
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <IconLightUp className="w-7 h-7 dark:hidden transition-all"/>
          <MoonIcon className="w-7 h-7 hidden dark:block transition-all"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={theme} onValueChange={(newTheme) => setTheme(newTheme as Theme)}>
          <DropdownMenuRadioItem value={"light"} onClick={onClickLightTheme}>밝은 테마</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={"dark"} onClick={onClickDarkTheme}>어두운 테마</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={"device"} onClick={onClickDeviceTheme}>기기 테마</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeDropdown;