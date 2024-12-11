<template>
  <footer class="bg-[color:var(--color-charcoal-black)] text-[color:var(--color-silver)] text-center p-6 text-sm">
    <p class="tracking-wide">
      <span class="text-[color:var(--color-metallic-gold)]">© {{ currentYear }} JulienK</span>. Tous droits réservés.
    </p>
    <div class="text-sm mt-2">
      <a href="/mentions-legales" class="hover:text-[color:var(--color-metallic-gold)]">Mentions légales</a>
      |
      <a href="/politique-de-confidentialite" class="hover:text-[color:var(--color-metallic-gold)]">Politique de confidentialité</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Calcul de l'année actuelle
const currentYear = new Date().getFullYear();
</script>
