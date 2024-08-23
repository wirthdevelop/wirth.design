<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

const links = [{
    // label: 'solawi.studio',
    // to: 'https://solawi.wirth.design'
}]
</script>

<template>
  <!-- <div>
    <div>
      <button @click="setLocale('de')">de</button>
      <button @click="setLocale('en')">en</button>
      <p>{{ $t('welcome') }}</p>
    </div>
  </div> -->
  <UHeader>
    <template #logo>
        {{ "wirth.design" }}
    </template>

    <template #right>
        <UButton variant="ghost" icon="i-heroicons-language" color="black"></UButton>
    </template>
  </UHeader>

  <UMain>
      <ULandingHero :title="$t('root.title')" :description="$t('root.description')" />
  </UMain>


  <UFooter :links="links">
    <template #left>
        Copyright © {{ new Date().getFullYear() }} wirth.design - {{ $t('root.allRightsReserved') }}
    </template>
  </UFooter>
</template>