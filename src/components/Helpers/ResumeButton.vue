<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <Button
    icon="bi bi-file-earmark-arrow-down"
    :label="t('common.resume')"
    light
    @click="downloadCurriculum" />
</template>
