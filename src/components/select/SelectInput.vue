<template lang="pug">
.label {{ label}}
.select-container
  select(@change="clickOption")
    option(v-for="opt, idx in optionExt" :key="opt.value" 
        :value="opt.value"
        :selected="opt.selected") 
      | {{ opt.label}}
</template>
<script>
import { defineComponent } from 'vue'
import { setupSelect } from './SelectBase'

export default defineComponent({
  props: {
    options: { type: Array, required: true },
    label: { type: String },
    value: { type: Array },
    image: { type: String },
    modelKey: { type: String },
    required: { type: Boolean },
    validator: { type: Array },
  },
  setup(props, ctx) {
    const { optionExt, handleSelect, updateValue } = setupSelect(props, ctx)
    return { optionExt, handleSelect, updateValue }
  },
  methods: {
    clickOption(evt) {
      const opt = this.options.find((_opt) => _opt.value == evt.target.value)
      if (!opt) {
        this.$forceUpdate()
        return
      }
      this.handleSelect(opt)
    },
  },
})
</script>
<style scoped></style>
