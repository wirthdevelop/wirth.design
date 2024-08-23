<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n()
</script>

<template>
  <div>
    <div>
      <button @click="setLocale('de')">de</button>
      <button @click="setLocale('en')">en</button>
      <p>{{ $t('welcome') }}</p>
    </div>
  </div>
</template>