<template lang="pug">
section
  input(
  type="number"
  @input="onInput"
  :value="value"
)
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    inputType: { type: String, default: "text" },
    label: { type: String },
    modelKey: { type: String },
    readonly: { type: Boolean },
    required: { type: Boolean },
    validator: { type: Array },
    placeholder: { type: String },
    hintText: { type: String },
  },
  methods: {
    onInput($event) {
      let value = $event.target.value;
      console.log(value)
    }
  },
  setup(props) {

    console.log(props)

    return {}
  }
})
</script>

<style lang="scss" scoped>

</style>