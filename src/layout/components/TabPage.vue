<template>
  <div class="!-m-20px h-41px !mb-4 pl-5 bg-white">
    <a-tabs
      v-model:activeKey="activeKey"
      class="!mb-0"
      hide-add
      type="editable-card"
      @change="changePage"
      @edit="onEdit"
    >
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" />
    </a-tabs>
  </div>
</template>
<script lang="ts" setup>
import { defineExpose } from 'vue'
// import { uniqueId } from 'lodash-es'
const router = useRouter()
const activeKey = ref()
const panes = ref([])
function onEdit(e, type) {
  console.log(e, type)
  if (type === 'remove') {
    deleteRoute(e)
  }
}
function changePage(key: any) {
  activeKey.value = key
  router.push({ path: key })
}
function deleteRoute(key: any) {
  let index = panes.value.findIndex(pane => pane.key === key)
  if (index !== -1) {
    if (panes.value.length === 0) {
      router.push({ path: '/' })
    }
    const prevItem = panes.value[index - 1]
    if (prevItem) {
      activeKey.value = prevItem.key
      router.push({
        path: prevItem.key
      })
    }
    const nextItem = panes.value[index + 1]
    if (nextItem) {
      activeKey.value = nextItem.key
      router.push({ path: nextItem.key })
    }
    panes.value = panes.value.filter(pane => pane.key !== key)
  }
}
function paneChange(title: string, path: string) {
  console.log(panes.value)
  let hasPane = panes.value.find((item: any) => {
    return item.title === title
  })
  if (hasPane) {
    activeKey.value = hasPane.key
  } else {
    let tempPane = { title, key: path }
    panes.value.push(tempPane)
    activeKey.value = tempPane.key
  }
}
defineExpose({ paneChange })
</script>
<style scoped>
:deep(.ant-tabs-nav-more .anticon) {
  width: 14px;
}
:deep(.ant-tabs-nav) {
  margin-bottom: 0;
}
</style>
