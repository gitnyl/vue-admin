<template>
  <div class="sidebar">
    <div class="menu" v-for="(menu, index) in menus" :key="index">
      <div class="menu-title" @click="toggleMenu(menu)">
        <span class="menu-icon" :class="menu.icon ?? menu.icon"></span>
        <span>{{ menu.title }}</span>
        <span class="arrow" :class="menu.expanded ? 'arrow-up' : 'arrow-down'"></span>
      </div>

      <div v-if="menu.expanded" class="sub-menu">
        <div
            class="sub-menu-item"
            v-for="(subMenu, subIndex) in menu.subMenus"
            :key="subIndex"
            @click.stop="navigateTo(subMenu)"
        >
          {{ subMenu.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menus from "@/assets/data/menu.json";

export default {
  name: "SidebarSection",
  data() {
    return {
      value: true,
      menus: menus
    };
  },
  methods: {
    navigateTo (subMenu) {1
      // console.log(`Navigating to:: ${subMenu.route.name} / pageTitle:: ${subMenu.title}`);
      this.$emit('update-title', subMenu.title);
      this.$router.push(subMenu.route);
    },
    toggleMenu (menu) {
      menu.expanded = !menu.expanded;
    }
  },
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #ffffff;
  height: 100vh;
  overflow-y: auto;
  padding: 10px;
  border-right: 1px solid #e0e0e0;
}

.menu {
  margin-bottom: 10px;
}

.menu-title {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
  justify-content: space-between;
}

.menu-title:hover {
  background-color: #f7f7f7;
}

.menu-icon {
  margin-right: 10px;
  font-size: 20px;
}

.sub-menu {
  margin-left: 20px;
  background-color: #f9f9f9;
  border-left: 2px solid #007bff;
}

.sub-menu-item {
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sub-menu-item:hover {
  background-color: #e0f7fa;
}

.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}

.arrow-up {
  border-bottom: 8px solid #a9a9a9;
}

.arrow-down {
  border-top: 8px solid #a9a9a9;
}
</style>
