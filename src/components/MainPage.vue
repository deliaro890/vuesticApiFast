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
                
                
            </VaNavbarItem>
          </template>
        <template #right>
            <VaNavbarItem class="navbar-item-slot">
              <h3 class="va-h3">
                    Bienvenido {{ userData.name }}
                </h3>
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
            :key="menuItem"  
            :active="isRouteActive(menuItem)"
             @click="setRouteActive(menuItem)"
            >
            <VaSidebarItemContent>
              <!-- <VaIcon name="home" />  -->
              <VaSidebarItemTitle>
                {{ menuItem.value }}
              </VaSidebarItemTitle>
            </VaSidebarItemContent>
        </VaSidebarItem>
        </VaSidebar>
      </template>
  
      <template #content>
        <main class="p-4">
          <EditarDatos></EditarDatos>
          <AgregarPosicion></AgregarPosicion>
          <PagarNuevaPosicion></PagarNuevaPosicion>
          <VerEstructura></VerEstructura>
        </main>
      </template>
    </VaLayout>
</template>
<script setup>
  import { ref } from 'vue';
  import store from '@/store';
import EditarDatos from './EditarDatos.vue';
import AgregarPosicion from './AgregarPosicion.vue';
import PagarNuevaPosicion from './PagarNuevaPosicion.vue';
import VerEstructura from './VerEstructura.vue';
  
  const userData = store.state.user
  const userPicture = userData.picture
  const menuItems = ref([ 
    { value: "Main Page" },
    { value: "Ver Estructura" },
    { value: "Pagar Nueva Posicion" },
    { value: "Agregar Posicion" },
    { value: "Editar Datos" }])
  const activeRouteName = ref("Main Page")
  const showSidebar = ref(false)
  const isRouteActive = (menuItem) => {
      return activeRouteName.value === menuItem.value;
    }
  const setRouteActive = (menuItem) => {
      activeRouteName.value = menuItem.value;
    }
</script>