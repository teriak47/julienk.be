<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import CookieBanner from './components/CookieBanner.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header component ici -->
    <Header />

    <!-- C'est ici que vos pages seront rendues -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer component ici -->
    <Footer />

    <CookieBanner />
  </div>
</template>
