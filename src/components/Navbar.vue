<template>
  <nav
    class="z-10 fixed top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-md px-6 py-3 w-auto"
  >
    <div class="flex justify-center items-center">
      <RouterLink
        to="/"
        class="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 px-2 rounded-md hover:bg-blue-50"
      >
        Accueil
      </RouterLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
