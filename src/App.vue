<script setup>
import { RouterView } from "vue-router";
import { useI18n } from "vue-i18n";
import FireCursor from "./components/UI/FireCursor.vue";

const { locale } = useI18n();

watchEffect(() => {
  document.documentElement.lang = locale.value;
});
</script>

<template>
  <FireCursor />
  <RouterView />
</template>
