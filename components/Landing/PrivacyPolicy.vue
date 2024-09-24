<template>
    <VCard scrollable>
      <VCardText>
        <p class="mt-4 text-h5">{{ $t('privacyPolicy.title') }}</p>
        <VDivider class="my-2" />
  
        <p class="mt-4 text-h6">{{ $t('privacyPolicy.generalInformation.title') }}</p>
        <p>{{ $t('privacyPolicy.generalInformation.text') }}</p>
  
        <p class="mt-4 text-h6">{{ $t('privacyPolicy.responsibleBody.title') }}</p>
        <p>{{ $t('privacyPolicy.responsibleBody.subtitle') }}</p>
        <p>{{ $t('address.name') }}</p>
        <p>{{ $t('address.street') }}</p>
        <p>{{ $t('address.city') }}</p>
        <p>{{ $t('privacyPolicy.responsibleBody.info') }}</p>
  
        <p class="mt-4 text-h6">{{ $t('privacyPolicy.dataCollection.title') }}</p>
  
        <p class="mt-4">{{ $t('privacyPolicy.dataCollection.subtitle.serverLog') }}</p>
        <ul class="ml-4">
          <li>{{ $t('privacyPolicy.dataCollection.text.serverLog.point_1') }}</li>
          <li>{{ $t('privacyPolicy.dataCollection.text.serverLog.point2') }}</li>
          <li>{{ $t('privacyPolicy.dataCollection.text.serverLog.point3') }}</li>
          <li>{{ $t('privacyPolicy.dataCollection.text.serverLog.point4') }}</li>
          <li>{{ $t('privacyPolicy.dataCollection.text.serverLog.point5') }}</li>
          <li>{{ $t('privacyPolicy.dataCollection.text.serverLog.point6') }}</li>
        </ul>
        <p>{{ $t('privacyPolicy.dataCollection.text.serverLog.info') }}</p>
  
        <p class="mt-4">{{ $t('privacyPolicy.dataCollection.subtitle.contactForm') }}</p>
        <p>{{ $t('privacyPolicy.dataCollection.text.contactForm') }}</p>
  
        <p class="mt-4 text-h6">{{ $t('privacyPolicy.yourRights.title') }}</p>
  
        <p class="mt-4">{{ $t('privacyPolicy.yourRights.subtitle.rightToControl') }}</p>
        <p>{{ $t('privacyPolicy.yourRights.text.rightToControl') }}</p>
  
        <p class="mt-4">{{ $t('privacyPolicy.yourRights.subtitle.rightToRevoke') }}</p>
        <p>{{ $t('privacyPolicy.yourRights.text.rightToRevoke') }}</p>
  
        <p class="mt-4">{{ $t('privacyPolicy.yourRights.subtitle.rightToPortability') }}</p>
        <p>{{ $t('privacyPolicy.yourRights.text.rightToPortability') }}</p>
  
        <p class="mt-4">{{ $t('privacyPolicy.yourRights.subtitle.rightToLodgeAComplaint') }}</p>
        <p>{{ $t('privacyPolicy.yourRights.text.rightToLodgeAComplaint') }}</p>
  
        <p class="mt-4 text-h6">{{ $t('privacyPolicy.dataToThirtParties.title') }}</p>
        <p>{{ $t('privacyPolicy.dataToThirtParties.text') }}</p>
  
        <p class="mt-4 text-h6">{{ $t('privacyPolicy.dataSecurity.title') }}</p>
        <p>{{ $t('privacyPolicy.dataSecurity.text') }}</p>
  
        <p class="mt-4 text-h6">{{ $t('privacyPolicy.changes.title') }}</p>
        <p>{{ $t('privacyPolicy.changes.text') }}</p>
      </VCardText>
    </VCard>
  </template>
  