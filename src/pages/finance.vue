<template>
  <div class="home">
      <h1 class="Main Title	space">Finance Plugins</h1>
      <plugins :disabledItem="$store.state.tabs.find(tabs => { return tabs.title === this.$route.name; })"></plugins>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
 components: {
    plugins: () => import('../components/plugins.vue'),
  },
  name: 'Finance',
  data(){
    return{
      // objectTab: this.$store.state.tabs.find(tabs => { return tabs.title === this.$route.name; }),
    }
  }
}
</script>
<style scoped>
  .space{
    margin-bottom: 32px;
  }
</style>