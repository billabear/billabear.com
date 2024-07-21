import {ENGLISH_TRANSLATIONS} from "./messages/en";
import {GERMAN_TRANSLATIONS} from "~/messages/de";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: ENGLISH_TRANSLATIONS,
        de: GERMAN_TRANSLATIONS,
    },
    fallbackLocale: 'en',
}))
