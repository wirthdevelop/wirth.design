<template>
    <VCard scrollable>
      <VCardTitle>
        <div class="d-flex">
          <div class="me-auto mt-4 text-h5">{{ $t('legal.title') }}</div>
          <div>
            <slot name="titleAppend">
    
            </slot>
          </div>
        </div>
        <VDivider class="my-2" />
      </VCardTitle>
      <VCardText>
        <p>{{ $t('address.name') }}</p>
        <p>{{ $t('address.street') }}</p>
        <p>{{ $t('address.city') }}</p>
  
        <p class="mt-4">{{ $t('legal.contact.title') }}</p>
        <p>Michael@wirth.design</p> 
  
        <p class="mt-4">{{ $t('legal.taxNumber.title') }}</p>
        <p>{{ $t('legal.taxNumber.text') }}</p>
      </VCardText>
    </VCard>
  </template>
  