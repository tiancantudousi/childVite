<template>
  <router-view v-slot="{ Component, route }">
    <KeepAlive>
      <component :is="Component" v-if="route.meta.keepAlive" ref="componentRef" :key="route.path" />
    </KeepAlive>
    <component :is="Component" v-if="!route.meta.keepAlive" :key="route.path" />
  </router-view>
</template>
<script lang="ts" setup>
// import NprogressBar from './components/NprogressBar.vue'
</script>
