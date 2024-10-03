<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    title: {
      type: String,
      default: 'TITLE'
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
