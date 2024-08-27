<template>
  <div>
    <app-header></app-header>

    <h1>User Information</h1>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/Layout/AppHeader.vue";
import AppFooter from "./components/Layout/AppFooter.vue";

export default {
  data() {
    return {
      name: 'Md Rakib Hassan',
      age: 27
    };
  },
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter
  }
};
</script>

<style>
/* Your styles here */
</style>
