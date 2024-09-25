<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale, setLocale, locales } = useI18n();

const dialogLegal = ref(false);
const dialogCopyright = ref(false);
const dialogPrivacyPolicy = ref(false);

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

    <VMain class="d-flex justify-center">
        <LandingPage />
    </VMain>

    <VFooter class="position-absolute bottom-0 w-100 d-flex align-end justify-space-between">
      <div class="d-flex align-end flex-column position-absolute left-0 pa-2">
        <div class="text-caption font-weight-light pa-2 pb-3">
          © {{ new Date().getFullYear() }} wirth.design - {{ $t('root.allRightsReserved') }}
        </div>
      </div>
      <div class="d-flex align-end flex-column position-absolute right-0 pa-2">
        <VBtn @click="dialogLegal = !dialogLegal" variant="text">{{ $t('legal.title') }}</VBtn>
        <VBtn @click="dialogCopyright = !dialogCopyright" variant="text">{{ $t('legal.copyright.title') }}</VBtn>
        <VBtn @click="dialogPrivacyPolicy = !dialogPrivacyPolicy" variant="text">{{ $t('privacyPolicy.title') }}</VBtn>
        <VBtn
          @click="navigateTo('https://www.linkedin.com/in/michael-wirth-00236b26b/', { external: true, open: { target: '_blank' } })"
          icon="mdi-linkedin" variant="text"></VBtn>
      </div>
    </VFooter>

    <VDialog v-model="dialogLegal" class="d-flex align-center h-100" max-width="800">
      <LandingLegalNotice>
        <template #titleAppend>
          <VBtn @click="dialogLegal = false" icon="mdi-close" variant="text"></VBtn>
        </template>
      </LandingLegalNotice>
    </VDialog>
    <VDialog v-model="dialogCopyright" class="d-flex align-center h-100" max-width="800">
      <LandingCopyright>
        <template #titleAppend>
          <VBtn @click="dialogCopyright = false" icon="mdi-close" variant="text"></VBtn>
        </template>
      </LandingCopyright>
    </VDialog>
    <VDialog v-model="dialogPrivacyPolicy" class="d-flex align-center h-100" max-width="800">
      <LandingPrivacyPolicy>
        <template #titleAppend>
          <VBtn @click="dialogPrivacyPolicy = false" icon="mdi-close" variant="text"></VBtn>
        </template>
      </LandingPrivacyPolicy>
    </VDialog>
  </VApp>
</template>
