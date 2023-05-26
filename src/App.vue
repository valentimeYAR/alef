<script setup>

import Header from "./Components/Header.vue";
import Footer from "./Components/Footer.vue";
</script>

<template>
    <div class="app">
        <Header/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<style scoped>
.app{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
