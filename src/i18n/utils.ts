import {defaultLang, showDefaultLang, ui} from './ui';
import {type Language, languages} from "@/types/language.ts";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}