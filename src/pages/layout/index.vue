<template>
  <el-row :gutter="20" :class="customizationStore.mode ? 'dark-mode' : ''">
    <el-col :span="4" class="m-0 p-0"><sidebar /></el-col>

    <el-col :span="20" class="m-0 p-0"><hero /></el-col>
  </el-row>
</template>

<script>
import sidebarComponent from "./sidebar.vue";
import heroComponent from "./hero.vue";
import { useCustomizationStore } from "../../stores/customizationStore";
import { ref } from "vue";

export default {
  data() {
    return {
      customizationStore: useCustomizationStore(),
      value1: ref(true),
    };
  },
  components: {
    sidebar: sidebarComponent,
    hero: heroComponent,
  },
};
</script>
