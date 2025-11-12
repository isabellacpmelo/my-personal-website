import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";

export const useLanguage = () => {
  const { locale } = useI18n();
  const router = useRouter();
  const route = useRoute();

  const languages = [
    {
      locale: "pt-BR",
      urlCode: "pt-br",
      name: "Português",
    },
    {
      locale: "en",
      urlCode: "en",
      name: "English",
    },
    {
      locale: "es",
      urlCode: "es",
      name: "Español",
    },
  ];

  const getLanguageFromUrl = () => {
    const urlLang = route.query.lang;
    if (urlLang) {
      const language = languages.find((lang) => lang.urlCode === urlLang);
      return language ? language.locale : null;
    }
    return null;
  };

  const getLanguageFromStorage = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("preferred-language");
    }
    return null;
  };

  const saveLanguageToStorage = (languageCode) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-language", languageCode);
    }
  };

  const updateUrlWithLanguage = (languageCode) => {
    const language = languages.find((lang) => lang.locale === languageCode);
    if (language) {
      const newQuery = { ...route.query };

      if (language.locale === "pt-BR") {
        delete newQuery.lang;
      } else {
        newQuery.lang = language.urlCode;
      }

      router.replace({ query: newQuery });
    }
  };

  const changeLanguage = (languageCode) => {
    locale.value = languageCode;
    saveLanguageToStorage(languageCode);
    updateUrlWithLanguage(languageCode);
  };

  return {
    languages,
    getLanguageFromUrl,
    getLanguageFromStorage,
    saveLanguageToStorage,
    updateUrlWithLanguage,
    changeLanguage,
  };
};
