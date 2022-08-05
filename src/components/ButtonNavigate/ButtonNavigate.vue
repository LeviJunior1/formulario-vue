<template>
  <b-row class="d-flex justify-content-center">
      <b-col cols="auto">
        <b-button :to="link" pill variant="primary" class="mt-4">
          {{ title }} <b-icon icon="arrow-right-short" aria-hidden="true"></b-icon>
        </b-button>
      </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'ButtonNavigate',
    props: {
        title: {
            type: String,
            required: false,
            default: ""
        },
        link: {
            type: String,
            required: false,
            default: '/'
        }
    }
}
</script>

<style>

</style>