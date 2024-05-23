import {ENGLISH_TRANSLATIONS} from "./messages/en";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: ENGLISH_TRANSLATIONS,
    }
}))
