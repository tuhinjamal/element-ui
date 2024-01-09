<template>
  <el-row
    :gutter="20"
    :class="customizationStore.mode == 'dark' ? 'dark-mode' : ''"
  >
    <el-col :xs="0" :md="4" class="m-0 p-0 border shadow left-bar"
      ><sidebar
    /></el-col>
    <el-col :xs="24" :md="0" class="m-0 p-0 border shadow"><sidebar /></el-col>

    <el-col :xs="24" :md="20" class="m-0 p-0 border shadow"><hero /></el-col>
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
    };
  },
  components: {
    sidebar: sidebarComponent,
    hero: heroComponent,
    sidebarVisibility: false,
  },
};
</script>
