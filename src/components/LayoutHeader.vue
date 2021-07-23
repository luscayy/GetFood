<template>

  <q-layout view="hHh lpR fFf">

    <q-header bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <div class="row">
             <q-avatar>
               <img id="logoHeader" src="../assets/get-food-logo-png.png">
             </q-avatar>
          </div>
        </q-toolbar-title>

        <q-btn outline rounded color="primary" label="Cadastre-se" @click="right = !right" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="right" side="right" overlay bordered>
      hello
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="#023E8A text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img id="logoFooter" src="../assets/get-food-logo-png.png">
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  name: 'layoutHeader',
  data () {
    return {}
  }
}
</script>
