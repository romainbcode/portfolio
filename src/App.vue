<!-- src/App.vue -->
<template>
  <div>
    <Navbar />
    <main class="pt-[120px]">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
</script>

<style scoped>
/* Gardez vos styles existants si nécessaire */
</style>
