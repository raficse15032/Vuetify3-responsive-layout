<template>
    <v-app>
        <Header/>
        <v-main>
            <slot></slot>
        </v-main>
  </v-app>
</template>

<script setup>
import Header from './Header.vue'
</script>