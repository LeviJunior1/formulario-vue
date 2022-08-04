<template>
  <ul>
    <li v-for="c in contacts" :key="c.name">
        {{ c.name }}
    </li>
    <pre>
        {{ contacts }}
    </pre>
  </ul>
</template>

<script>
export default {
    name: 'ListContact',
    props: {
        contacts: {
            type: Array,
            default: []
        }
    }
}
</script>

<style>

</style>
