<template>
    <div class="stars">
        <div v-for="(star, index) in stars" :key="index" class="star" :style="generateStarStyle()"></div>
    </div>
</template>

<script>
export default {
    name: "StarsBackground",
    data() {
        return {
            stars: Array.from({ length: 50 }), // Number of stars
        };
    },
    methods: {
        generateStarStyle() {
            const size = Math.random() * 5 + 2; // Star size between 2px and 7px
            return {
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${Math.random() * 5 + 3}s`, // Between 3s and 8s
            };
        },
    },
};
</script>

<style scoped>
.stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
}

.star {
    position: absolute;
    background: white;
    border-radius: 50%;
    animation: star-animation linear infinite;
}
</style>
