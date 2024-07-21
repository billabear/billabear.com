import {ENGLISH_TRANSLATIONS} from "./messages/en";
import {GERMAN_TRANSLATIONS} from "~/messages/de";
import {SPAINISH_TRANSLATIONS} from "~/messages/es";
import {FRENCH_TRANSLATIONS} from "~/messages/fr";
import {ITALIEN_TRANSLATIONS} from "~/messages/it";
import {DUTCH_TRANSLATIONS} from "~/messages/nl";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: ENGLISH_TRANSLATIONS,
        de: GERMAN_TRANSLATIONS,
        es: SPAINISH_TRANSLATIONS,
        fr: FRENCH_TRANSLATIONS,
        it: ITALIEN_TRANSLATIONS,
        nl: DUTCH_TRANSLATIONS,
    },
    fallbackLocale: 'en',

}))
