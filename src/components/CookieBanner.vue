<template>
  <div v-if="showBanner" class="fixed bottom-0 left-0 right-0 bg-[color:var(--color-charcoal-black)] text-[color:var(--color-silver)] p-4 z-50">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
      <!-- Texte d'explication -->
      <p>
        Ce site utilise des cookies pour améliorer votre expérience et collecter des statistiques anonymes.
        Pour en savoir plus, lisez notre
        <a href="/politique-de-confidentialite" class="text-[color:var(--color-metallic-gold)] underline hover:no-underline">
          Politique de confidentialité
        </a>.
      </p>

      <!-- Boutons d'actions -->
      <div class="flex space-x-4">
        <button @click="acceptCookies" class="px-4 py-2 bg-[color:var(--color-metallic-gold)] text-black rounded">
          Accepter
        </button>
        <button @click="declineCookies" class="px-4 py-2 bg-gray-500 text-white rounded">
          Refuser
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Importation de Vue's Composition API
import { ref } from "vue";

// Affichage de la bannière
const showBanner = ref(!localStorage.getItem("cookieConsent"));

// Gestion des actions
const acceptCookies = () => {
  localStorage.setItem("cookieConsent", "accepted");
  showBanner.value = false;
};

const declineCookies = () => {
  localStorage.setItem("cookieConsent", "declined");
  showBanner.value = false;
};
</script>

<style scoped>
</style>
