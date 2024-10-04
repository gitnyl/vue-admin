<template>
  <div class="header">
    <div class="nav-icon" @click="$emit('toggle-sidebar')">☰</div>
    <h2 class="pointer" @click="goHome">TMS</h2>
    <div class="spacer"></div>
    <div class="avatar">
      <span class="fas fa-user-circle"></span>
    </div>
    <span class="username">ADMIN01</span>
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
  },
  methods: {
    goHome () {
      this.$router.push('/');
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

.pointer {
  cursor: pointer;
}
</style>
