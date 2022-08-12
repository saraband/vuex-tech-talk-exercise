<template>
  <div id="app">
    <MergeRequestsList />
  </div>
</template>

<script>
import MergeRequestsList from "./components/MergeRequestsList.vue";

export default {
  name: "App",
  components: {
    MergeRequestsList,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 2rem;
}
</style>
