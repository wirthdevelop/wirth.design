<template>
    <VCard scrollable>
      <VCardTitle>
        <div class="d-flex">
          <div class="me-auto mt-4 text-h5">{{ $t('legal.copyright.title') }}</div>
          <div>
            <slot name="titleAppend">
    
            </slot>
          </div>
        </div>
        <VDivider class="my-2" />
      </VCardTitle>
      <VCardText>
        <p>{{ $t('legal.copyright.textCopyright') }}</p>
        <p class="mt-4">{{ $t('legal.copyright.textWaring') }}</p>
      </VCardText>
    </VCard>
  </template>