<template>
  <a-layout-header>
    <div class="flex cursor-pointer" @click="$router.push('/')">
      <img src="/images/logo.svg" alt="logo" class="h-28px" />
      <h1 class="text-white ml-20px pl-20px border-l-1 text-18px leading-30px font-600 md:hidden">
        后台管理系统
      </h1>
    </div>
    <div class="px-10px">
      <a-popconfirm
        placement="bottomRight"
        title="确定退出当前用户？"
        ok-text="确定"
        :okButtonProps="{ loading: loading }"
        loading
        cancel-text="取消"
        @confirm="confirm"
      >
        <span className="inline-block text-white mr-10px">Admin</span>
        <a-badge dot>
          <a-avatar>
            <template #icon><user-outlined /></template>
          </a-avatar>
        </a-badge>
      </a-popconfirm>
    </div>
  </a-layout-header>
</template>

<script lang="ts" setup>
import { UserOutlined } from '@ant-design/icons-vue';
const loading = ref(false);
const confirm = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>
