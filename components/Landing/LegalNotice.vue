<template>
    <VCard scrollable>
      <VCardText>
        <p class="mt-4 text-h5">{{ $t('legal.title') }}</p>
        <VDivider class="my-2" />
  
        <p>{{ $t('address.name') }}</p>
        <p>{{ $t('address.street') }}</p>
        <p>{{ $t('address.city') }}</p>
  
        <p class="mt-4">{{ $t('legal.contact.title') }}</p>
        <p>Michael@wirth.design</p> 
  
        <p class="mt-4">{{ $t('legal.taxNumber.title') }}</p>
        <p>{{ $t('legal.taxNumber.text') }}</p>
  
        <p class="mt-4 text-h5">{{ $t('legal.copyright.title') }}</p>
        <VDivider class="my-2" />
  
        <p>{{ $t('legal.copyright.textCopyright') }}</p>
        <p>{{ $t('legal.copyright.textWaring') }}</p>
      </VCardText>
    </VCard>
  </template>
  