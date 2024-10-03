<template>
  <div class="sidebar">
    <div class="menu" v-for="(menu, index) in menus" :key="index">
      <div class="menu-title" @click="menu.expanded = !menu.expanded">
        <span class="menu-icon" :class="menu.icon ?? menu.icon"></span>
        <span>{{ menu.title }}</span>
        <span class="arrow" :class="menu.expanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></span>
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
export default {
  name: "SidebarSection",
  data() {
    return {
      value: true,
      menus: [
        {
          title: '게시판',
          icon: 'fas fa-calendar-alt',
          expanded: true,
          subMenus: [
            { title: '공지사항', route: '/notice' },
            { title: 'Q&A', route: '/qna' }
          ]
        },
        {
          title: '메시지',
          icon: 'fas fa-envelope',
          expanded: false,
          subMenus: [
            { title: '발송하기', route: '/send-message' }
          ]
        },
        {
          title: '캠페인',
          icon: 'fas fa-vector-square',
          expanded: false,
          subMenus: [] // 하위 메뉴가 없는 경우
        },
      ]
    };
  },
  methods: {
    navigateTo(subMenu) {
      console.log(`Navigating to:: ${subMenu.route}`);
      // this.$router.push(subMenu.route);
    },
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
</style>
