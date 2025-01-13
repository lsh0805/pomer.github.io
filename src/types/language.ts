export const languages = {
    ko: {
        name: "한국어",
    },
    en: {
        name: "English",
    },
    ja: {
        name: "日本語",
    },
} as const;

export type Language = keyof typeof languages;