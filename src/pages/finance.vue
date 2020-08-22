<template>
  <div class="home">
      <h1 class="Main Title	">Finance</h1>
      <plugins></plugins>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
 components: {
    plugins: () => import('../components/plugins.vue'),
  },
  name: 'Home',
}
</script>
