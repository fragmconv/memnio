<script setup>
import navbar from "./components/navbar.vue";
</script>

<template>
  <div class="h-full w-full min-h-screen">
    <navbar />
    <router-view  />
  </div>
</template>
