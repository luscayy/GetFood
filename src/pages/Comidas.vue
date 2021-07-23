<template>
  <q-page padding class="container">
      <header><h2 class="q-mt-xs text-blue-10">Comidas disponíveis</h2></header>
      <div class="row q-guuter-md">
        <div class="col-md-3" v-for="comida in comidas" :key="comida.id">
          <q-card class="q-ma-md">
              <q-card-section>
                <div class="text-h6 text-blue-10">{{ comida.name }}</div>
                  <p class="text-subtitle2">{{ comida.email }}</p>
              </q-card-section>
                <q-separator insert />
                  <q-card-section class="q-pt-none q-mt-md">
                    <p>{{ comida.address.street }}</p>
                      <q-btn color="primary" label="Pedir comida"/>
                  </q-card-section>
          </q-card>
        </div>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'Comidas',
  data () {
    return {
      comidas: []
    }
  },
  methods: {
    viewComidas () {
      this.$axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        this.comidas = response.data
      })
    }
  },
  beforeMount () {
    this.viewComidas()
  }
}
</script>
