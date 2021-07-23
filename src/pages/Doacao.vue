<template>
  <q-page padding class="container">
      <header><h2 class="q-mt-xs text-blue-10">Faça sua doação agora!</h2></header>
      <div class="row q-guuter-md">
        <div class="col-md-4" v-for="doacao in doacoes" :key="doacao.id">
          <q-card class=" q-ma-lg my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">{{ doacao.email }}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ doacao.name }}</div>
          <div class="text-caption text-grey">
            {{ doacao.address.street }}
          </div>
        </q-card-section>

        <q-card-section class="col-md-4 q-mt-xs q-pa-md flex flex-center">
          <q-img
            class="rounded-borders"
            src="../assets/imagens/restaurante1.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          16:30
        </q-btn>
        <q-btn color="primary" label="Doar"/>
      </q-card-actions>
    </q-card>
        </div>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'Doacoes',
  data () {
    return {
      doacoes: []
    }
  },
  methods: {
    viewDoacao () {
      this.$axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        this.doacoes = response.data
      })
    }
  },
  beforeMount () {
    this.viewDoacao()
  }
}
</script>
