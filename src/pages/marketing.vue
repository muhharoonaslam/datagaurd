<template>
  <div class="home">
      <h1 class="Main Title space">Marketing Plugins</h1>
      <plugins :disabledItem="$store.state.tabs.find(tabs => { return tabs.title === this.$route.name; })"></plugins>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {
    plugins: () => import('../components/plugins.vue'),
  },
  name: 'Marketing',
}
</script>
<style scoped>
  .space{
    margin-bottom: 32px;
  }
</style>