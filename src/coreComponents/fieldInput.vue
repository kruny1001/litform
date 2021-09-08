<template lang="pug">
.field-wrap
  input(
    @input="onInput"
    :value="value"
  )
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    onInput($event) {
      let value = $event.target.value;
      console.log(value)
    }
  },
  setup(props) {
    console.log(props)
  }
})
</script>

<style lang="scss" scpoed>

</style>