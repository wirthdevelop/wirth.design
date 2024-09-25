<template>
    <VCard scrollable>
      <VCardTitle>
        <div class="d-flex">
          <div class="me-auto mt-4 text-h5">{{ $t('privacyPolicy.title') }}</div>
          <div>
            <slot name="titleAppend">
    
            </slot>
          </div>
        </div>
        <VDivider class="my-2" />
      </VCardTitle>
      <VCardText>
        <p class="text-h6">{{ $t('privacyPolicy.generalInformation.title') }}</p>
        <p class="mt-4">{{ $t('privacyPolicy.generalInformation.text') }}</p>
  
        <p class="mt-4 text-h6">{{ $t('privacyPolicy.responsibleBody.title') }}</p>
        <p class="mt-4">{{ $t('privacyPolicy.responsibleBody.subtitle') }}</p>
        <p class="mt-4">{{ $t('address.name') }}</p>
        <p>{{ $t('address.street') }}</p>
        <p>{{ $t('address.city') }}</p>
        <p class="mt-4">{{ $t('privacyPolicy.responsibleBody.info') }}</p>
  
        <p class="mt-4 text-h6">{{ $t('privacyPolicy.dataCollection.title') }}</p>
  
        <p class="mt-4">{{ $t('privacyPolicy.dataCollection.subtitle.serverLog') }}</p>
        <ul class="mt-4 ml-4">
          <li>{{ $t('privacyPolicy.dataCollection.text.serverLog.point_1') }}</li>
          <li>{{ $t('privacyPolicy.dataCollection.text.serverLog.point2') }}</li>
          <li>{{ $t('privacyPolicy.dataCollection.text.serverLog.point3') }}</li>
          <li>{{ $t('privacyPolicy.dataCollection.text.serverLog.point4') }}</li>
          <li>{{ $t('privacyPolicy.dataCollection.text.serverLog.point5') }}</li>
          <li>{{ $t('privacyPolicy.dataCollection.text.serverLog.point6') }}</li>
        </ul>
        <p class="mt-4">{{ $t('privacyPolicy.dataCollection.text.serverLog.info') }}</p>
  
        <p class="mt-4">{{ $t('privacyPolicy.dataCollection.subtitle.contactForm') }}</p>
        <p class="mt-4">{{ $t('privacyPolicy.dataCollection.text.contactForm') }}</p>
  
        <p class="mt-4 text-h6">{{ $t('privacyPolicy.yourRights.title') }}</p>
  
        <p class="mt-4">{{ $t('privacyPolicy.yourRights.subtitle.rightToControl') }}</p>
        <p class="mt-4">{{ $t('privacyPolicy.yourRights.text.rightToControl') }}</p>
  
        <p class="mt-4">{{ $t('privacyPolicy.yourRights.subtitle.rightToRevoke') }}</p>
        <p class="mt-4">{{ $t('privacyPolicy.yourRights.text.rightToRevoke') }}</p>
  
        <p class="mt-4">{{ $t('privacyPolicy.yourRights.subtitle.rightToPortability') }}</p>
        <p class="mt-4">{{ $t('privacyPolicy.yourRights.text.rightToPortability') }}</p>
  
        <p class="mt-4">{{ $t('privacyPolicy.yourRights.subtitle.rightToLodgeAComplaint') }}</p>
        <p class="mt-4">{{ $t('privacyPolicy.yourRights.text.rightToLodgeAComplaint') }}</p>
  
        <p class="mt-4 text-h6">{{ $t('privacyPolicy.dataToThirtParties.title') }}</p>
        <p class="mt-4">{{ $t('privacyPolicy.dataToThirtParties.text') }}</p>
  
        <p class="mt-4 text-h6">{{ $t('privacyPolicy.dataSecurity.title') }}</p>
        <p class="mt-4">{{ $t('privacyPolicy.dataSecurity.text') }}</p>
  
        <p class="mt-4 text-h6">{{ $t('privacyPolicy.changes.title') }}</p>
        <p class="mt-4">{{ $t('privacyPolicy.changes.text') }}</p>
      </VCardText>
    </VCard>
  </template>
  