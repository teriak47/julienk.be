<template>
  <header class="bg-[color:var(--color-deep-blue)] text-[color:var(--color-silver)] p-4 shadow-md">
    <nav class="flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <img :src="logo" alt="Logo" class="h-8 w-8" />
        <h1 class="text-xl font-bold hover:text-[color:var(--color-metallic-gold)] transition-colors duration-300">
          Mon Site
        </h1>
      </div>
      <ul class="flex space-x-4">
        <li>
          <router-link
            to="/"
            class="hover:text-[color:var(--color-metallic-gold)] transition-colors duration-300"
            :class="{ 'text-[color:var(--color-metallic-gold)] font-bold': $route.path === '/' }"
          >
            Accueil
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="hover:text-[color:var(--color-metallic-gold)] transition-colors duration-300"
            :class="{ 'text-[color:var(--color-metallic-gold)] font-bold': $route.path === '/about' }"
          >
            À propos
          </router-link>
        </li>
        <li>
          <router-link
            to="/blog"
            class="hover:text-[color:var(--color-metallic-gold)] transition-colors duration-300"
            :class="{ 'text-[color:var(--color-metallic-gold)] font-bold': $route.path === '/blog' }"
          >
            Blog
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Importation du logo
import logo from '../assets/logo_temporary_jk.png';
</script>

