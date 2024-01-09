<template>
  <nav
    class="navbar navbar-light shadow-sm rounded"
    :class="customizationStore.mode == 'dark' ? 'bg-secondary' : ''"
  >
    <div class="container-fluid">
      <a
        class="navbar-brand m-0 p-0"
        :class="customizationStore.mode == 'dark' ? 'dark-mode-text' : ''"
        >Grypas
      </a>
      <div>
        <el-switch v-model="switch" @click="modeChange">
          <template #active-action>
            <span class="custom-active-action">T</span>
          </template>
          <template #inactive-action>
            <span class="custom-inactive-action">F</span>
          </template>
        </el-switch>
        <el-dropdown class="mt-2">
          <p class="d-flex">
            <!-- <el-icon><setting /></el-icon> -->

            <span
              :class="customizationStore.mode == 'dark' ? 'dark-mode-text' : ''"
              class="ms-1"
              >Tom</span
            >
          </p>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import { Menu as IconMenu, Message, Setting } from "@element-plus/icons-vue";

import { useCustomizationStore } from "../../stores/customizationStore";

export default {
  data() {
    return {
      customizationStore: useCustomizationStore(),
      mode: "",
      switch: this.mode == "light" ? false : true,
    };
  },
  methods: {
    modeChange() {
      if (localStorage.getItem("mode") == "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
      this.customizationStore.modeChange(this.mode);
      // customizationStore.modeChange(customizationStore.mode)
      // localStorage.setItem("mode", this.customizationStore.mode);

      // console.log("localStorage.getItem", localStorage.getItem("mode"));
      // console.log("customizationStore", this.customizationStore.mode);
    },
  },
};
</script>
