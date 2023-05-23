<template>
    <v-lazy
        :min-height="300"
        :options="{'threshold':0.8}"
        transition="fab-transition">
        <v-container class="my-5">
            <v-row justify="center">
                <v-col class="text-center" cols="12" lg="12">
                    <p class="text-h4">Portfolio</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, vel eius rerum ea eos dicta debitis nam nulla, sequi temporibus unde. Saepe, eius. Sunt inventore distinctio, quas eum repudiandae officiis.</p>
                </v-col>
                <v-col  cols="12" lg="12">
                    <div class="text-center">
                        <v-chip @click="selected = 'web-app'; apps = webApps" :color="selected == 'web-app' ? 'pink':'light-blue-lighten-5'" class="ma-2" variant="elevated">Web App</v-chip>
                        <v-chip @click="selected = 'mobile-app'; apps = mobileApps" :color="selected == 'mobile-app' ? 'red':'light-blue-lighten-5'" class="ma-2" variant="elevated">Mobile App</v-chip>
                        <v-chip @click="selected = 'desktop-app'; apps = desktopApps" :color="selected == 'desktop-app' ? 'purple':'light-blue-lighten-5'" class="ma-2" variant="elevated">Desktop</v-chip>
                    </div>
                </v-col>
                
                <v-col v-for="app in apps" :key="app.title" lg="3" md="3" sm="4" cols="6" >
                    <v-card class="w-100">
                        <v-img
                            :src="app.image"
                            height="200px"
                            cover
                        >
                            <v-card-title class="text-white">{{app.title}}</v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
  </v-lazy>
</template>

<script setup>
    import { ref } from "vue"

    const apps = ref([])
    const selected = ref('web-app')
    const webApps = [
        {
            "title": "Item 1",
            "image": "https://via.placeholder.com/350x150/E91E63/FFFFFF"
        },
        {
            "title": "Item 2",
            "image": "https://via.placeholder.com/350x150/E91E63/FFFFFF"
        },
        {
            "title": "Item 3",
            "image": "https://via.placeholder.com/350x150/E91E63/FFFFFF"
        },
        {
            "title": "Item 4",
            "image": "https://via.placeholder.com/350x150/E91E63/FFFFFF"
        },
        {
            "title": "Item 5",
            "image": "https://via.placeholder.com/350x150/E91E63/FFFFFF"
        },
        {
            "title": "Item 6",
            "image": "https://via.placeholder.com/350x150/E91E63/FFFFFF"
        },

    ]
    const mobileApps = [
        {
            "title": "Item 1",
            "image": "https://via.placeholder.com/350x150/F44336/FFFFFF"
        },
        {
            "title": "Item 2",
            "image": "https://via.placeholder.com/350x150/F44336/FFFFFF"
        },
        {
            "title": "Item 3",
            "image": "https://via.placeholder.com/350x150/F44336/FFFFFF"
        },
        {
            "title": "Item 4",
            "image": "https://via.placeholder.com/350x150/F44336/FFFFFF"
        },
        {
            "title": "Item 5",
            "image": "https://via.placeholder.com/350x150/F44336/FFFFFF"
        },
        {
            "title": "Item 6",
            "image": "https://via.placeholder.com/350x150/F44336/FFFFFF"
        },
    ]

    const desktopApps = [
        {
            "title": "Item 1",
            "image": "https://via.placeholder.com/350x150/9C27B0/FFFFFF"
        },
        {
            "title": "Item 2",
            "image": "https://via.placeholder.com/350x150/9C27B0/FFFFFF"
        },
        {
            "title": "Item 3",
            "image": "https://via.placeholder.com/350x150/9C27B0/FFFFFF"
        },
        {
            "title": "Item 4",
            "image": "https://via.placeholder.com/350x150/9C27B0/FFFFFF"
        },
        {
            "title": "Item 5",
            "image": "https://via.placeholder.com/350x150/9C27B0/FFFFFF"
        },
        {
            "title": "Item 6",
            "image": "https://via.placeholder.com/350x150/9C27B0/FFFFFF"
        },
    ]

    apps.value = webApps
</script>

<style>

</style>