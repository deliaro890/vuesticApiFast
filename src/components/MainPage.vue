<template>
    <VaLayout 
      style="height: 500px"
      :left="{ absolute: true}"
    >
        <template #top>
        <VaNavbar 
            color="primary"
            class="h-24">
          <template #left>
            <VaButton 
                :icon="showSidebar ? 'menu_open' : 'menu'"
                @click="showSidebar = !showSidebar" />
          </template>
          <template #center>
            <VaNavbarItem
                class="font-bold text-lg">
                <h3 class="va-h3">
                    Bienvenido a Infinity System
                </h3>
                
            </VaNavbarItem>
          </template>
        <template #right>
            <VaNavbarItem class="navbar-item-slot">
                <VaAvatar
                    :src="userPicture"
                    class="mr-6"
                />
            </VaNavbarItem>
        </template>
        </VaNavbar>
      </template>
  
      <template #left>
        <VaSidebar v-model="showSidebar">
        <VaSidebarItem 
            v-for="menuItem in menuItems"
            :key="menuItem">
            <VaSidebarItemContent>
              <VaIcon name="home" /> 
              <VaSidebarItemTitle>
                {{ menuItem.value }}
              </VaSidebarItemTitle>
            </VaSidebarItemContent>
        </VaSidebarItem>
        </VaSidebar>
      </template>
  
      <template #content>
        <main class="p-4">
          <h3 class="va-h3">
            
          </h3>
          <p></p>
          <p></p>
          <p></p>
        </main>
      </template>
    </VaLayout>
</template>
<script setup>
  import { ref } from 'vue';
  import store from '@/store';
  
  const userData = store.state.user
  const userPicture = userData.picture
  const menuItems = ref([ 
    { value: "Ver Estructura" },
    { value: "Pagar Nueva Posicion" },
    { value: "Agregar Posicion" },
    { value: "Editar Datos" }])
  const showSidebar = ref(false)
</script>