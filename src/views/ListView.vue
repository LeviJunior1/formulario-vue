<template>
  <b-container>
      <ListContact :contacts="listContacts" />
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
    this.listContacts = getAllInfo()
  }
  
}
</script>
