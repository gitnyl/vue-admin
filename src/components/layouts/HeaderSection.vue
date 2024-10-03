<template>
  <div class="header">
    <div class="nav-icon" @click="$emit('toggle-sidebar')">☰</div>
    <h2>TMS</h2>
    <div class="spacer"></div>
    <div class="avatar">
      <span class="fas fa-user-circle"></span>
    </div>
    <span class="username">휴머스온</span>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      menuItems: [
        { title: 'Q&A', icon: 'mdi-comment-question' },
        { title: '메시지', icon: 'mdi-message' },
        { title: '캠페인', icon: 'mdi-campaign' },
      ]
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  background-color: #388e3c;
  color: white;
  padding: 15px;
}

.nav-icon {
  cursor: pointer;
  margin-right: 20px;
}

.spacer {
  flex-grow: 1;
}

.avatar {
  margin-left: 10px;
}

.username {
  margin-left: 10px;
}
</style>
