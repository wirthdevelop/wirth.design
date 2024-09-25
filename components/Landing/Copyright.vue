<template>
  <VCard>
    <VCardTitle>
      <div class="mt-4 ml-2  text-h5">{{ $t('legal.copyright.title') }}</div>
    </VCardTitle>

    <VCardText class="text-body-2">
      <p>{{ $t('legal.copyright.textCopyright') }}</p>
      <p class="mt-4">{{ $t('legal.copyright.textWaring') }}</p>
    </VCardText>

    <VCardActions>
      <slot name="actions">

      </slot>
    </VCardActions>
  </VCard>
</template>