<template>
  <b-container>
      <ListContact :contacts="listContacts" @getInfo="getInfo"/>
      <ButtonNavigate title="Formulário Contato" link="/" />
  </b-container>
</template>

<script>
import ListContact from '@/components/Contact/ListContact'
import { getAllInfo } from '@/utils/sessionStorage'
import ButtonNavigate from '@/components/ButtonNavigate'

export default {
  name: 'ListView',
  components: {
    ListContact,
    ButtonNavigate
  },
  data: () => ({
    listContacts: []
  }),
  mounted() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      this.listContacts = getAllInfo()
    }
  }
}
</script>
