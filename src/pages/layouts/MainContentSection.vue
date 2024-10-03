<template>
  <div class="main-content">
    <page-title :title="title" v-if="!isHome" />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/common/PageTitle";

export default {
  name: "MainContentSection",
  components: {
    PageTitle
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    isHome() {
      return this.$route.path === '/';
    }
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.main-content {
  padding: 20px;
}
</style>
