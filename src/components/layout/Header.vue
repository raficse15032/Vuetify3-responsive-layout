<template>
    <v-app-bar class="app-bar-border" :class="mobile ? 'px-0':'px-8'" scroll-behavior="elevate">
      <v-toolbar-title :class="{ 'text-right': mobile }" class="hedaer-title pr-6">Hello Developer</v-toolbar-title>
      <template v-if="mobile" v-slot:prepend>
        <v-btn size="x-large" v-if="!drawer" @click.stop="drawer = !drawer" variant="text" icon="mdi-forwardburger"></v-btn>
        <v-btn size="x-large" v-else @click.stop="drawer = !drawer" variant="text" icon="mdi-backburger"></v-btn>
      </template>
      <template v-if="!mobile" v-slot:append>
        <v-btn variant="text">Home</v-btn>
        <v-btn variant="text">About</v-btn>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn variant="text" color="success">Get started</v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
      </v-list>
      <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template>
    </v-navigation-drawer>
    <v-divider></v-divider>
</template>
<style scoped>
.app-bar-border{
  border-bottom: 1px solid #efebeb;
}
.hedaer-title{
  color: #00C853;
  font-weight: bold;
  font-size: x-large;
}
</style>

<script setup>
  import { useDisplay } from 'vuetify'
  import { ref,onMounted } from "vue";

  const drawer = ref(null)
  const { width, mobile } = useDisplay()

  onMounted(() => {
    console.log(width.value) // 960
    console.log(mobile.value) // true
  })
</script>