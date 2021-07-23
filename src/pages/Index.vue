<template>
  <q-page class="container">
    <section id="header">
      <div class="row q-pa-lg justify-center">
          <div class="offset-lg-1 col-xs-12 col-sm-12 col-md-7 col-lg-3">
            <header><h3>Cadastre-se na plataforma que <br> facilita a forma de <br> doações de alimentos <br> entre restaurantes e <br> ONG’s.</h3></header>
              <p><i><b>Doar e receber alimentos nunca foi tão fácil.</b></i></p>
                <q-btn class="q-mt-md" @click="$router.push('cadastro')" label="Cadastre-se" color="primary">
                 </q-btn>
                <h5 class="no-margin"><i><br>Baixe agora!</i></h5>
                    <a href="#appStore"><img class="q-mt-sm" src="~assets/imagens/app-store.svg" width="100px" height="41px"></a>
                      <a href="#googlePlay"><img class="q-mt-sm" src="~assets/imagens/google-play.svg" width="120px" height="41px"></a>
            </div> <!-- col -->
              <div class="q-pa-lg q-mt-xl col-xs-12 col-sm-12 col-md-7 col-lg-3">
                <img src="~assets/imagens/celular-get.svg" alt="celular"/>
              </div>
          </div> <!-- row -->
    </section>
              <section id="informacoes" class="bg-indigo-1 q-pb-xl">
                  <div class="row q-pa-lg q-mt-lg justify-center">
                    <div class="q-pt-xl q-mt-xs col-xs-12 col-sm-12 col-md-7 col-lg-4">
                      <img src="~assets/imagens/desperdicio-alimentos.svg" width="400px"/>
                    </div> <!-- col -->
                        <div class="q-mt-xs justify-center">
                        <h5><b>Desperdício de alimentos <br> no Brasil</b></h5>
                          <p>Segundo cálculos do World <br> Resourses Institute (WRI) Brasil, <br> o país desperdiça 41 mil <br> toneladas de alimentos por ano. <br> Desse total, 15% ocorre em <br> restaurantes, ou algo em torno <br> de 6 mil toneladas.</p>
                        </div>
                    </div> <!-- row -->
              </section> <!-- informacoes sobre desperdicio de comida -->

          <section id="informacoes2">
            <div class="row q-pa-xs justify-center">
              <header><h3 class="q-pa-lg q-pb-xs q-mb-xs justify-center text-h4">Não sabe como doar? <br> Deixe que nós cuidamos disso por você.</h3></header>
            </div>
                <div class="row q-pa-xs q-mb-lg justify-center">
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-2" v-for="informacao in informacoes" :key="informacao.id">
                    <q-card class="q-ma-md">
                      <q-card-section>
                        <div class="text-h5 text-blue-10">{{ informacao.titulo }}</div>
                      </q-card-section>
                      <q-card-section class="q-pt-none">
                        <p>{{ informacao.descricao }}</p>
                      <q-btn color="primary" @click="$router.push('cadastro')" label="Saiba mais"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div> <!-- row -->
          </section>
    </q-page>
</template>

<style type="text/css">
  section#header h3{
    font-weight: 300;
    margin-bottom: 0.5em;
    color: #023E8A;
  }

  section#header p{
    font-weight: 400;
    margin-bottom: 0.5em;
    color: #023E8A;
  }

  section#header h5{
    font-weight: 300;
    margin-bottom: 0.5em;
    color: #023E8A;
  }

  section#informacoes h5{
    font-weight: 600;
    margin-bottom: 1.4em;
    color: #023E8A;
  }

  section#informacoes p{
    font-weight: 300;
    margin-bottom: 0.5em;
    color: #023E8A;
  }

  section#informacoes2 h3{
    font-weight: 500;
    color: #023E8A;
  }

  section#informacoes2 p{
    font-weight: 300;
    margin-bottom: 1.2em;
    color: #023E8A;
  }

</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      informacoes: [{
        id: 1,
        titulo: 'GetFood para restaurantes',
        descricao: 'Através do Get Food!, basta colocar uma foto com a descrição do alimento a ser doado, para que ONG’s próximas possam visualizar e entrar em contato para buscar a doação no horário marcado.',
        imagem: 'assets/imagens/doacao-cesta.svg'
      },
      {
        id: 2,
        titulo: 'GetFood para ONG’s',
        descricao: 'Com o Get Food!, você pode encontrar diversos restaurantes próximos que estejam disponíveis para fazer doações.',
        imagem: 'assets/imagens/jovem.svg'
      }
      ]
    }
  }
}
</script>
