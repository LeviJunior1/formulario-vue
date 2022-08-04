<template>
  <ValidationObserver v-slot="{ invalid }">
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <ValidationProvider rules="required" v-slot="{ errors }">
        <b-form-group id="input-group-1" label="Nome" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder="Digite seu nome..."
          ></b-form-input>
          <span>{{ errors[0] }}</span>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider rules="required|email" v-slot="{ errors }">
        <b-form-group
          id="input-group-2"
          label="E-mail"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.email"
            type="email"
            placeholder="Digite seu E-mail..."
          ></b-form-input>
          <span>{{ errors[0] }}</span>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider rules="required" v-slot="{ errors }">
        <b-form-group
          id="input-group-3"
          label="Mensagem"
          label-for="input-3"
        >
          <b-form-textarea
            id="input-3"
            v-model="form.message"
            rows="6"
            placeholder="Digite a mensagem aqui..."
          ></b-form-textarea>
          <span>{{ errors[0] }}</span>
        </b-form-group>
      </ValidationProvider>

      <b-button type="submit" :disabled="invalid" variant="primary">Enviar</b-button>
      <b-button type="reset" variant="danger">Resetar</b-button>
    </b-form>
  </ValidationObserver>
</template>

<script>
  import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
  import { required, email } from 'vee-validate/dist/rules';
  import { setInfo } from '@/utils/sessionStorage'

  /*

    - Campo de validar nome falta o validador,
    - CSS do formulário,
    - Pagina de lista de contatos,
    - Css página de contato

  */

  // import { validarNome } from '@/utils/validation/name'

  // extend('teste', value => {
  //   // console.log('Validando nome: ', value)
  //   console.log(validarNome(value))
  //   //return validarNome(value)
  // })

  extend('email', {
    ...email,
    message: 'E-mail inválido verifique se preencheu corretamente'
  })

  extend('required', {
    ...required,
    message: 'É necessário preencher esse campo'
  })

  export default {
    name: 'FormContact',
    components: {
      ValidationProvider,
      ValidationObserver
    },
    data: () => ({
      form: {
        name: '',
        email: '',
        message: ''
      },
    }),
    methods: {
      onSubmit() {
        setInfo(this.form)
      },
      onReset() {
        Object.assign(this.$data, this.$options.data())
      },
    },
  }
</script>
