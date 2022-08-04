<template>
  <b-container>
      <ListContact :contacts="listContacts" @getInfo="getInfo"/>
  </b-container>
</template>

<script>
import ListContact from '@/components/Contact/ListContact'
import { getAllInfo } from '@/utils/sessionStorage'

export default {
  name: 'ListView',
  components: {
    ListContact
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
