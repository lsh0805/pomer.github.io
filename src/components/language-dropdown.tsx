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
import {IconLanguage} from "@/components/icon/language-icon.tsx";
import {IconChevronDown} from "@/components/icon/down-icon.tsx";
import {type Language, languages} from "@/types/language.ts";

const LanguageDropDown = () => {
  const [language, setLanguage] = useState<Language>("ko");

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as Language);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <IconLanguage className="w-7 h-7"/>
          <p>{languages[language].name}</p>
          <IconChevronDown  className="w-4 h-4"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={language} onValueChange={(newLanguage) => handleLanguageChange(newLanguage)}>
          <DropdownMenuRadioItem value={"ko"}>한국어</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={"en"}>English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={"ja"}>日本語</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageDropDown;