<script setup>
import { useLayout } from './composables/layout';
import { computed } from 'vue';

const { layoutConfig, contextPath } = useLayout();

const logoUrl = computed(() => {
    return `${contextPath}layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});
</script>

<template>
    <div class="layout-footer">
        <!--<img :src="logoUrl" alt="Logo" height="20" class="mr-2" />-->

        <span class="font-medium ml-2"></span>
    </div>
</template>
<style lang="scss" scoped></style>
