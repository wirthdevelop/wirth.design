<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale, setLocale, locales } = useI18n();

const changeLanguage = (langCode: any) => {
  setLocale(langCode);
};
</script>

<template>
  <VApp full-height>
    <VAppBar scroll-behavior="elevate" absolute>
      <template #title>
        <div class="font-weight-regular">
          wirth.design
        </div>
      </template>
      <template #append>
        <VMenu>
          <template v-slot:activator="{ props }">
            <VBtn icon="mdi-translate" variant="text" v-bind="props"></VBtn>
          </template>

          <VList>
            <VListItem v-for="(lang, index) in locales" :key="index" @click="changeLanguage(lang.code)">
              <VListItem-title>{{ $t(lang.code) }}</VListItem-title>
            </VListItem>
          </VList>
        </VMenu>
      </template>
    </VAppBar>

    <VMain class="d-flex justify-center align-center">
      <VSheet class="font-weight-thin text-h2 text-md-h1 mx-4">
        {{ $t('root.description') }}
      </VSheet>
    </VMain>

    <VFooter class="position-absolute bottom-0 w-100 d-flex justify-space-between">
      <div>
        <div class="text-caption font-weight-light">
          © {{ new Date().getFullYear() }} wirth.design - {{ $t('root.allRightsReserved') }}
        </div>
      </div>
      <div>
        <VBtn @click="navigateTo('https://www.linkedin.com/in/michael-wirth-00236b26b/', { external: true, open: { target: '_blank' } })" icon="mdi-linkedin" variant="text"></VBtn>
      </div>
    </VFooter>
  </VApp>
</template>
