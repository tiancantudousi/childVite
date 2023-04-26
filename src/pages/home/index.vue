<template>
  <div>
    <h1>welcome</h1>
    <router-link to="/outward/settle-scan">/outward/scan 跳转无框架，无权限模块</router-link>
    <div>
      <router-link to="/setting/role">/setting/role</router-link>
      <br />
      <router-link to="/setting/user">/setting/user</router-link>
    </div>
    <a-select :options="options" class="!w-300px"></a-select>
  </div>
</template>
<script setup lang="ts">
const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
]
</script>
