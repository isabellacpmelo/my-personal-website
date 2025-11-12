/** @format */

import "./assets/css/style.css";

import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import messages from "./locales";

const getInitialLocale = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get("lang");

  const supportedLocales = ["pt-BR", "en", "es"];
  const urlToLocaleMap = {
    "pt-br": "pt-BR",
    en: "en",
    es: "es",
  };

  if (langParam && urlToLocaleMap[langParam]) {
    return urlToLocaleMap[langParam];
  }

  const storedLocale = localStorage.getItem("preferred-language");
  if (storedLocale && supportedLocales.includes(storedLocale)) {
    return storedLocale;
  }


  return "pt-BR";
};

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: "en",
  messages,
});

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount("#app");
