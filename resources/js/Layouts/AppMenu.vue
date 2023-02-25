<script setup>
import { ref } from 'vue';
import { Link } from "@inertiajs/inertia-vue3";
import AppMenuItem from './AppMenuItem.vue';

const model = [
  {
    label: 'Landing Page',
    icon: 'pi pi-fw pi-globe',
    to: '/about',
    items: []
  },
  {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-globe',
      to: '/',
      items: []
  },
  {
      label: 'Customers',
      icon: 'pi pi-fw pi-pencil',
      to: '/customers',
  },
  {
      label: 'Calendar',
      icon: 'pi pi-fw pi-calendar',
      to: '/pages/timeline'
  },
];
</script>

<template>
  <ul class="layout-menu">
      <li style="padding: 20px; font-size: 16px"><Link href="/about" class="layout-menuitem-root-text"><span style="margin-right: 10px" class="pi pi-fw pi-globe"></span>Landing Page</Link></li>
      <li class="menu-separator"></li>
      <li style="padding: 20px; font-size: 16px"><Link href="/" class="layout-menuitem-root-text"><span style="margin-right: 10px" class="pi pi-fw pi-home"></span>Dashboard</Link></li>
      <li class="menu-separator"></li>
      <li style="padding: 20px; font-size: 16px"><Link href="/customers" class="layout-menuitem-root-text"><span style="margin-right: 10px" class="pi pi-fw pi-pencil"></span>Customers</Link></li>
      <li class="menu-separator"></li>
      <li style="padding: 20px; font-size: 16px"><Link href="/calendar" class="layout-menuitem-root-text"><span style="margin-right: 10px" class="pi pi-fw pi-calendar"></span>Calendar</Link></li>
      <li class="menu-separator"></li>
  </ul>
</template>

<style lang="scss" scoped>
.layout-menu {
  li > a {
    color: #000;
  }
}
</style>
