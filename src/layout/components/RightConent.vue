<template>
  <div class="flex items-center text-white mx-15px space-x-15px">
    <a-dropdown>
      <a class="text-white" @click.prevent>
        <a-avatar shape="rounded" size="small">
          <template #icon>
            <user-outlined />
          </template>
        </a-avatar>
        {{ nickName }}
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item @click="settings">
            <setting-outlined />
            个人设置
          </a-menu-item>
          <a-menu-item @click="logout()">
            <logout-outlined />
            退出登录
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script lang="ts" setup>
import {
  FullscreenOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined
} from '@ant-design/icons-vue';
const props = defineProps({
  nickName: {
    type: String,
    default: 'user'
  }
});
const router = useRouter();
const { toggle: fullscreenToggle } = useFullscreen();
const logout = () => {
  localStorage.removeItem('token');
  router.push('/');
};
const settings = () => {
  router.push('/account/setting');
};
</script>
