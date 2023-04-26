<template>
  <div />
</template>
<script lang="ts" setup>
import nprogress from 'nprogress';
nprogress.start();
onUnmounted(() => {
  nprogress.done();
});
</script>
