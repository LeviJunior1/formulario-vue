<template>
  <ValidationObserver v-slot="{ invalid }" tag="form" ref="observer">
    <h1 class="text-primary font-weight-bold">Contato</h1>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <b-row>
        <b-col sm="12" md="6">
          <ValidationProvider rules="required|name" v-slot="{ errors }">
            <b-form-group id="input-group-1" label="Nome" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.name"
                placeholder="Digite seu nome..."
              ></b-form-input>
              <span class="text-danger font-weight-bolder">{{ errors[0] }}</span>
            </b-form-group>
          </ValidationProvider>
        </b-col>
        <b-col sm="12" md="6">
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
              <span class="text-danger font-weight-bolder">{{ errors[0] }}</span>
            </b-form-group>
          </ValidationProvider>
        </b-col>
      </b-row>
      <ValidationProvider rules="required|max:300" v-slot="{ errors }">
        <b-form-group
          id="input-group-3"
          label="Mensagem"
          label-for="input-3"
        >
          <b-form-textarea
            id="input-3"
            v-model="form.message"
            rows="6"
            placeholder="Digite a sua mensagem aqui..."
          ></b-form-textarea>
          <span class="text-danger font-weight-bolder">{{ errors[0] }}</span>
        </b-form-group>
      </ValidationProvider>

      <b-button type="submit" :disabled="invalid" variant="primary" class="mr-2">Enviar</b-button>
      <b-button type="reset" variant="danger">Resetar</b-button>
    </b-form>
  </ValidationObserver>
</template>

<script>
  import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
  import { required, email, max } from 'vee-validate/dist/rules';
  import { setInfo } from '@/utils/sessionStorage'
  import toast from '@/mixins/toast'
  import { validarNome } from '@/utils/validation/name'

  extend('name', value => {
    if(validarNome(value)) {
      return true
    }
    
    return 'O nome não é válido.'
  })

  extend('email', {
    ...email,
    message: 'E-mail inválido verifique se preencheu corretamente.'
  })

  extend('required', {
    ...required,
    message: 'É necessário preencha esse campo.'
  })

  extend('max', {
    ...max,
    message: 'O valor máximo aceito é 300 letras.'
  })

  export default {
    name: 'FormContact',
    mixins: [toast],
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
        try {
          setInfo(this.form)
          this.showToast('success', "Tudo certo...", "Contato Salvo com Sucesso :)", 'b-toaster-bottom-left', true)
          this.resetData()
        } catch(e) {
          this.showToast('danger', "Hmm...", "Erro ao Salvar :(", 'b-toaster-bottom-left', true)
        }
      },
      onReset() {
        this.resetData()
        this.showToast('success', "Opa...", "Limpei o Formulário para Você ;)", 'b-toaster-bottom-left', true)
      },
      resetData() {
        Object.assign(this.$data, this.$options.data())
        this.resetErrorForm()
      },
      resetErrorForm() {
        this.$refs.observer.reset();
      }
    },
  }
</script>
