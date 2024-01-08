<template>
  <div id="hero" class="text-center shadow-sm">
    <div class="px-3 py-4">
      <navbar />
    </div>
    <h1>This is hero section</h1>
  </div>
</template>

<script lang="ts" setup>
import headerComponent from "./header.vue";
const navbar = headerComponent;
import { ref } from "vue";
import { Menu as IconMenu, Message, Setting } from "@element-plus/icons-vue";

const item = {
  date: "2016-05-02",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles",
};
const tableData = ref(Array.from({ length: 20 }).fill(item));
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: yellow;
  color: red;
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  /* border-right: none; */
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
