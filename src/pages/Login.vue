/* eslint-disable no-empty */
<template>
  <q-page padding>
<q-form v-on:keyup.enter="logar()" :model="formularioLogin" ref="formularioLogin" class="q-gutter-md">
<q-input filled lazy-rules type="email" v-model="formularioLogin.email" label="E-mail"
          :rules="[ val => val && val.length > 0 || 'Insira o email']">
        </q-input>

      <q-input filled type="password" lazy-rules v-model="formularioLogin.senha"
        :rules="[ val => val && val.length > 0 || 'Insira a senha']" label="Senha">
      </q-input>

      <div class="row justify-center content-center">
        <q-btn label="Login" @click="logar()" color="primary">
        <q-tooltip
          transition-show="rotate"
          transition-hide="rotate">
          Faça seu login agora!
        </q-tooltip>
        </q-btn>
        <q-btn label="Limpar" @click="limpar()" color="primary" flat class="q-ml-sm">
        <q-tooltip
          transition-show="rotate"
          transition-hide="rotate">
          Errou alguma coisa? Limpe tudo.
        </q-tooltip>
        </q-btn>
      </div>
      <div class="form-group">
          <div class="col-sm-12 text-center">
            <p class="p2">Não tem uma conta?
              <a href="#" class="text-primary">
                <b>
                  <router-link to="/cadastro" class="b2">Registre-se agora!</router-link>
                </b>
              </a>
            </p>
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-12 text-center">
            <p class="p2">Esqueceu a Senha?
              <a href="#" class="text-primary">
                <b>
                  <router-link to="/recuperar-senha" class="b2">Recuperar sua senha</router-link>
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
      formularioLogin: {}
    }
  }
}
</script>
