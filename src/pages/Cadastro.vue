/* eslint-disable no-empty */
<template>
  <q-page padding>
<q-form v-on:keyup.enter="logar()" :model="formularioCadastro" ref="formularioCadastro" class="q-gutter-md">
<q-input filled lazy-rules type="email" v-model="formularioCadastro.email" label="E-mail"
          :rules="[ val => val && val.length > 0 || 'Insira o email']">
        </q-input>

      <q-input filled type="password" lazy-rules v-model="formularioCadastro.senha"
        :rules="[ val => val && val.length > 0 || 'Insira a senha']" label="Senha">
      </q-input>

      <q-input filled type="password" lazy-rules v-model="formularioCadastro.senha"
        :rules="[ val => val && val.length > 0 || 'Insira novamente a senha']" label="Confirme a senha">
      </q-input>

      <div class="row justify-center content-center">
        <q-btn label="Cadastrar" @click="cadastrar()" color="primary">
          <q-tooltip
          transition-show="rotate"
          transition-hide="rotate">
          Cadastre-se agora!
        </q-tooltip>
        </q-btn>
      </div>
      <div class="form-group">
          <div class="col-sm-12 text-center">
            <p class="p2">Já tem uma conta?
              <a href="#" class="text-primary">
                <b>
                  <router-link to="/login" class="b2">Faça seu login!</router-link>
                </b>
              </a>
            </p>
          </div>
        </div>

    </q-form>
    <layoutHeader />
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      formularioCadastro: {}
    }
  }
}
</script>
