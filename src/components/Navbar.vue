<template>
  <nav
    class="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-md px-6 py-3 w-auto"
  >
    <div class="flex justify-center items-center space-x-8">
      <RouterLink
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        class="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 py-2 px-4 rounded-md hover:bg-blue-50"
        :class="{ 'text-blue-600 bg-blue-50': isActive(item.path) }"
      >
        {{ item.name }}
      </RouterLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuItems: [
        { name: "Accueil", path: "/" },
        { name: "À propos", path: "/about" },
      ],
    };
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>
