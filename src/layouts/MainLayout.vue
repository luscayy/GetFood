<template>
 <q-layout view="hHh lpR fff">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar class="bg-toolbar">
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
            <img src="../assets/get-food-logo.svg">
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-footer">
      <q-toolbar>
        <q-toolbar-title>
            <img src="../assets/get-food-logo.svg">
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
 </template>

 <style type="text/css">
   .bg-footer{
      background-color: #023E8A;
   }

   .bg-footer img{
      margin-top: 0.4em;;
   }

   .bg-toolbar img{
      margin-top: 0.4em;;
   }
 </style>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Minha conta',
    icon: 'account_circle',
    link: 'login'
  },
  {
    title: 'Doações',
    icon: 'store',
    link: 'doacao'
  },
  {
    title: 'Comidas',
    icon: 'flatware',
    link: 'comidas'
  },
  {
    title: 'Carrinho',
    icon: 'shopping_cart',
    link: 'carrinho'
  },
  {
    title: 'Localização',
    icon: 'place',
    link: 'localizacao'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      left: false,
      essentialLinks: linksData
    }
  }
}
</script>
