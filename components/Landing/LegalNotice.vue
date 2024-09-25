<template>
  <VCard>
    <VCardTitle>
      <div class="mt-4 ml-2 text-h5">{{ $t('legal.title') }}</div>
    </VCardTitle>

    <VCardText class="text-body-2">
      <p>{{ $t('address.name') }}</p>
      <p>{{ $t('address.street') }}</p>
      <p>{{ $t('address.city') }}</p>

      <p class="mt-4">{{ $t('legal.contact.title') }}</p>
      <p>Michael@wirth.design</p>

      <p class="mt-4">{{ $t('legal.taxNumber.title') }}</p>
      <p>{{ $t('legal.taxNumber.text') }}</p>
    </VCardText>

    <VCardActions>
      <slot name="actions">

      </slot>
    </VCardActions>
  </VCard>
</template>