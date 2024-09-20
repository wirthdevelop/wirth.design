<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale, setLocale, locales } = useI18n();

const changeLanguage = (langCode: any) => {
  setLocale(langCode);
};
</script>

<template>
  <VLayout>
    <VAppBar>
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

    <VMain class="d-flex justify-center align-center h-screen">
      <div class="text-h1">
        {{ $t('root.description') }}
      </div>
    </VMain>
    
    <VFooter class="position-absolute bottom-0">
      <VRow>
        <VCol>
          <div class="text-caption font-weight-light">
            © {{ new Date().getFullYear() }} wirth.design - {{ $t('root.allRightsReserved') }}
          </div>
        </VCol>
      </VRow>
    </VFooter>
  </VLayout>
</template>
