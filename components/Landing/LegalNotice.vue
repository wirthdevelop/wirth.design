<template>
    <VCard scrollable>
        <VCardTitle>
            {{ $t('legal.title') }}
        </VCardTitle>
        <VCardSubtitle>
            {{ $t('legal.subtitle') }}
        </VCardSubtitle>
        <VCardText>
            <p>{{ $t('address.name') }}</p>
            <p>{{ $t('address.street') }}</p>
            <p>{{ $t('address.city') }}</p>
        </VCardText>
    </VCard>
</template>