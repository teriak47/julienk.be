<template>
  <div>
    <StarsBackground />
    <header class="text-center mt-10 fade-in">
      <!-- SVG intégré -->
      <HeaderSVG />


      <h1 class="title-structured">
        <span class="highlight">Plongez dans mon univers :</span>
        <span>mes ressentis, mes passions, et tant de découvertes</span>
      </h1>

    </header>
    <div class="container text-center mt-8">
      <h2 class="text-3xl font-semibold text-gold">Qui suis-je ?</h2>
      <p class="mt-4 text-lg">
        Passionné par la musique, les séries, et les jeux vidéo, je partage ici mes découvertes et
        mes coups de cœur. Ce site est une extension de mes centres d'intérêt, avec des
        recommandations et des réflexions personnelles.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        <div class="bg-blue-600 text-white p-4 rounded shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold">Mes Ressentis</h3>
          <p class="mt-2">
            Découvrez mes pensées sur des séries captivantes, des albums marquants, et des jeux
            incontournables.
          </p>
          <a href="/ressentis" class="text-gold underline">Lire mes ressentis →</a>
        </div>
        <div class="bg-blue-600 text-white p-4 rounded shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold">Mes Recommandations</h3>
          <p class="mt-2">
            Plongez dans des recommandations personnalisées, soigneusement sélectionnées pour vous.
          </p>
          <a href="/recommandations" class="text-gold underline">Voir mes recommandations →</a>
        </div>
        <div class="bg-blue-600 text-white p-4 rounded shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold">Contactez-moi</h3>
          <p class="mt-2">
            Envie d'échanger ou de poser une question ? N'hésitez pas à me contacter.
          </p>
          <a href="/contact" class="text-gold underline">Me contacter →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import StarsBackground from '../components/StarsBackground.vue';
import HeaderSVG from '../assets/header.svg';
</script>

<style scoped>
/* Animation: fade-in avec un zoom léger *</script>

<style scoped>
/* Animation: fade-in avec un zoom léger *</script>

<style scoped>
/* Animation: fade-in avec un zoom léger */
@keyframes fadeInZoom {
  0% {
    opacity: 0;
    transform: scale(0.95);
    /* Léger zoom initial */
  }

  100% {
    opacity: 1;
    transform: scale(1);
    /* Zoom à sa taille normale */
  }
}

.fade-in {
  animation: fadeInZoom 1.5s ease-out;
  /* Animation sur 1.5 secondes */
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.text-gold {
  color: var(--color-metallic-gold);
}

.bg-blue-600 {
  background-color: var(--color-deep-blue);
}

/* Header Title Style */
header h1 {
  font-size: 2.5rem;
  /* Taille adaptée pour une belle présence */
  font-weight: 700;
  color: var(--color-metallic-gold);
  text-align: center;
  line-height: 1.4;
  /* Espacement agréable entre les lignes */
  letter-spacing: 0.5px;
  /* Espacement des lettres subtil */
  margin-bottom: 1.5rem;
}

.header-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 2rem 0;
}

.header-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}



/* Section Text */
.container p {
  font-size: 1.1rem;
  line-height: 1.6;
  /* Facilite la lecture */
  text-align: justify;
  /* Texte justifié pour un alignement net */
  color: var(--color-silver);
  margin: 0 auto;
}

/* Boxes Text Style */
.grid h3 {
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
}

.grid p {
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
}

.header-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.header-image {
  max-width: 200px;
  /* Ajuste selon tes besoins */
  margin-bottom: 1rem;
}
</style>
