<template>
  <el-aside id="sidebar" width="100%">
    <el-scrollbar
      :class="
        customizationStore.mode == 'dark'
          ? 'dark-mode-sidebar'
          : 'border-0 bg-light'
      "
    >
      <el-image style="width: 100%; height: 200px" :src="logoImage" />
      <el-menu
        id="sidebar-list"
        :default-openeds="['1', '3']"
        :class="
          customizationStore.mode == 'dark'
            ? 'dark-mode-sidebar'
            : 'border-0 bg-light'
        "
      >
        <el-sub-menu
          :class="
            customizationStore.mode == 'dark' ? 'bg-dark ' : 'border-0 bg-light'
          "
          index="1"
        >
          <template #title>
            <el-icon><message /></el-icon>
            <p
              :class="
                customizationStore.mode == 'dark'
                  ? 'sidebar-text sidebar-hover m-0 p-0 w-100'
                  : 'm-0 p-0 text-dark'
              "
            >
              Navigator One
            </p>
          </template>
          <el-menu-item-group
            :class="
              customizationStore.mode == 'dark'
                ? 'bg-dark text-light sidebar-hover'
                : 'border-0 bg-light'
            "
          >
            <template #title>Group 1</template>
            <el-menu-item
              :class="
                customizationStore.mode == 'dark'
                  ? 'sidebar-text sidebar-hover'
                  : ' text-dark'
              "
              index="1-1"
              >Option 1</el-menu-item
            >
            <el-menu-item
              :class="
                customizationStore.mode == 'dark'
                  ? 'sidebar-text sidebar-hover '
                  : 'text-dark'
              "
              index="1-2"
              >Option 2</el-menu-item
            >
          </el-menu-item-group>
          <el-menu-item-group
            :class="
              customizationStore.mode == 'dark'
                ? 'bg-dark text-light sidebar-hover'
                : 'border-0 bg-light'
            "
            title="Group 2"
          >
            <el-menu-item
              :class="
                customizationStore.mode == 'dark'
                  ? 'sidebar-text sidebar-hover'
                  : ' text-dark'
              "
              index="1-3"
              >Option 3</el-menu-item
            >
          </el-menu-item-group>
          <el-sub-menu
            :class="
              customizationStore.mode == 'dark'
                ? 'bg-dark '
                : 'border-0 bg-light'
            "
            index="1-4"
          >
            <template #title>
              <p
                :class="
                  customizationStore.mode == 'dark'
                    ? 'sidebar-text sidebar-hover m-0 p-0 w-100'
                    : 'm-0 p-0 text-dark'
                "
              >
                Option4
              </p></template
            >
            <el-menu-item
              :class="
                customizationStore.mode == 'dark'
                  ? 'sidebar-text bg-dark  sidebar-sublist-text'
                  : ' text-dark'
              "
              index="1-4-1"
              >Option 4-1</el-menu-item
            >
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu
          :class="
            customizationStore.mode == 'dark' ? 'bg-dark ' : 'border-0 bg-light'
          "
          index="2"
        >
          <template #title>
            <el-icon><message /></el-icon>
            <p
              :class="
                customizationStore.mode == 'dark'
                  ? 'sidebar-text sidebar-hover m-0 p-0 w-100'
                  : 'm-0 p-0 text-dark'
              "
            >
              Navigator One
            </p>
          </template>
          <el-menu-item-group
            :class="
              customizationStore.mode == 'dark'
                ? 'bg-dark text-light sidebar-hover'
                : 'border-0 bg-light'
            "
          >
            <template #title>Group 1</template>
            <el-menu-item
              :class="
                customizationStore.mode == 'dark'
                  ? 'sidebar-text sidebar-hover'
                  : ' text-dark'
              "
              index="2-1"
              >Option 1</el-menu-item
            >
            <el-menu-item
              :class="
                customizationStore.mode == 'dark'
                  ? 'sidebar-text sidebar-hover '
                  : 'text-dark'
              "
              index="2-2"
              >Option 2</el-menu-item
            >
          </el-menu-item-group>
          <el-menu-item-group
            :class="
              customizationStore.mode == 'dark'
                ? 'bg-dark text-light sidebar-hover'
                : 'border-0 bg-light'
            "
            title="Group 2"
          >
            <el-menu-item
              :class="
                customizationStore.mode == 'dark'
                  ? 'sidebar-text sidebar-hover'
                  : ' text-dark'
              "
              index="2-3"
              >Option 3</el-menu-item
            >
          </el-menu-item-group>
          <el-sub-menu
            :class="
              customizationStore.mode == 'dark'
                ? 'bg-dark '
                : 'border-0 bg-light'
            "
            index="2-4"
          >
            <template #title>
              <p
                :class="
                  customizationStore.mode == 'dark'
                    ? 'sidebar-text sidebar-hover m-0 p-0 w-100'
                    : 'm-0 p-0 text-dark'
                "
              >
                Option4
              </p></template
            >
            <el-menu-item
              :class="
                customizationStore.mode == 'dark'
                  ? 'sidebar-text bg-dark  sidebar-sublist-text'
                  : ' text-dark'
              "
              index="2-4-1"
              >Option 4-1</el-menu-item
            >
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu
          :class="
            customizationStore.mode == 'dark' ? 'bg-dark ' : 'border-0 bg-light'
          "
          index="3"
        >
          <template #title>
            <el-icon><message /></el-icon>
            <p
              :class="
                customizationStore.mode == 'dark'
                  ? 'sidebar-text sidebar-hover m-0 p-0 w-100'
                  : 'm-0 p-0 text-dark'
              "
            >
              Navigator One
            </p>
          </template>
          <el-menu-item-group
            :class="
              customizationStore.mode == 'dark'
                ? 'bg-dark text-light sidebar-hover'
                : 'border-0 bg-light'
            "
          >
            <template #title>Group 1</template>
            <el-menu-item
              :class="
                customizationStore.mode == 'dark'
                  ? 'sidebar-text sidebar-hover'
                  : ' text-dark'
              "
              index="3-1"
              >Option 1</el-menu-item
            >
            <el-menu-item
              :class="
                customizationStore.mode == 'dark'
                  ? 'sidebar-text sidebar-hover '
                  : 'text-dark'
              "
              index="3-2"
              >Option 2</el-menu-item
            >
          </el-menu-item-group>
          <el-menu-item-group
            :class="
              customizationStore.mode == 'dark'
                ? 'bg-dark text-light sidebar-hover'
                : 'border-0 bg-light'
            "
            title="Group 2"
          >
            <el-menu-item
              :class="
                customizationStore.mode == 'dark'
                  ? 'sidebar-text sidebar-hover'
                  : ' text-dark'
              "
              index="3-3"
              >Option 3</el-menu-item
            >
          </el-menu-item-group>
          <el-sub-menu
            :class="
              customizationStore.mode == 'dark'
                ? 'bg-dark '
                : 'border-0 bg-light'
            "
            index="3-4"
          >
            <template #title>
              <p
                :class="
                  customizationStore.mode == 'dark'
                    ? 'sidebar-text sidebar-hover m-0 p-0 w-100'
                    : 'm-0 p-0 text-dark'
                "
              >
                Option4
              </p></template
            >
            <el-menu-item
              :class="
                customizationStore.mode == 'dark'
                  ? 'sidebar-text bg-dark  sidebar-sublist-text'
                  : ' text-dark'
              "
              index="3-4-1"
              >Option 4-1</el-menu-item
            >
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
import logo from "../../assets/images/logo/logo.jpg";
import { ref } from "vue";
import { Menu as IconMenu, Message, Setting } from "@element-plus/icons-vue";
import { useCustomizationStore } from "../../stores/customizationStore";

export default {
  data() {
    return {
      customizationStore: useCustomizationStore(),
    };
  },
  setup() {
    const logoImage = logo;
    return { logoImage };
  },
};
</script>
