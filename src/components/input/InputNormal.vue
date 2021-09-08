<template lang="pug">
section
  input(
    @input="onInput"
    :value="value"
    :placeholder="placeholder"
  )
</template>

<script>
import { defineComponent } from 'vue'
import { updateModel } from '../modelUtil'

export default defineComponent({
  props: {
    inputType: { type: String, default: "text" },
    label: { type: String, default: "" },
    modelKey: { type: String, required: true },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    validator: { type: Array },
    placeholder: { type: String, default: ""},
    hintText: { type: String, default: "" },
    value: { type: String }
  },
  setup(props, context) {

    const { modelKey } = props
    
    function onInput(evt){
      updateModel(context, modelKey, evt.target.value)
    }

    return { onInput }
  }
})
</script>

<style lang="scss" scoped>

</style>