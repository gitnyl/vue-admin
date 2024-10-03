<template>
  <div>
    <header-section @toggle-sidebar="toggleSidebar" />

    <div class="layout">
      <sidebar-section v-if="isOpen" @update-title="updateTitle" />
      <div class="main-content">
        <main-content-section :title="title" />
      </div>
    </div>

  </div>
</template>

<script>
import HeaderSection from "@/pages/layouts/HeaderSection";
import SidebarSection from "@/pages/layouts/SidebarSection";
import MainContentSection from "@/pages/layouts/MainContentSection";

export default {
  name: 'App',
  components: {
    SidebarSection,
    HeaderSection,
    MainContentSection
  },
  data() {
    return {
      isOpen: true, // 사이드바 상태 제어
      title: 'TITLE'
    }
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
    updateTitle (newTitle) {
      console.log(`updateTitle:: ${newTitle}`)
      this.title = newTitle;
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.layout {
  display: flex;
}

.sidebar {
  width: 250px; /* 사이드바 너비 */
  background-color: #f4f4f4;
  height: 100vh; /* 사이드바 전체 높이 */
  overflow-y: auto;
  padding: 10px;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
}
</style>
