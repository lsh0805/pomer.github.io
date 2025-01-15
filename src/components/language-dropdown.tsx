"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button.tsx";
import {IconLanguage} from "@/components/icon/language-icon.tsx";
import {IconChevronDown} from "@/components/icon/down-icon.tsx";
import {type Language, languages} from "@/types/language.ts";
import {useTranslatedPath} from "@/i18n/utils.ts";

type LanguageDropDownProps = {
  language: Language;
}


const LanguageDropDown = ({language}: LanguageDropDownProps) => {
  const translatePath = useTranslatedPath(language);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <IconLanguage className="w-7 h-7"/>
          <p>{languages[language]}</p>
          <IconChevronDown className="w-4 h-4"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={language}>
          {Object.entries(languages).map(([language, label]) => (
            <a href={`${translatePath("", language)}/`} key={language}>
              <DropdownMenuRadioItem value={language}>
                {label}
              </DropdownMenuRadioItem>
            </a>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageDropDown;