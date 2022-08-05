<template>
  <b-container>
    <b-row class="form-contact">
      <b-col>
        <FormContact />
      </b-col>
    </b-row>
    <ButtonNavigate title="Lista de Contato" link="/list" />
  </b-container>
</template>

<script>
import FormContact from '@/components/Contact/FormContact'
import ButtonNavigate from '@/components/ButtonNavigate'

export default {
  name: 'ContactView',
  components: {
    FormContact,
    ButtonNavigate
  }
}
</script>

<style scoped>
  .form-contact {
    padding: 20px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    border-radius: 6px;
    border-left: 10px solid #007bff;
  }
</style>
