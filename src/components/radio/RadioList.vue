<template lang="pug">

.label {{ label }}
.radio-container
  .item-area(v-for="opt, idx in optionExt" :key="opt.value")
    .item(@click="() => toggleSelect(opt)")
      .radio(:class="{selected: opt.selected}")
      .image {{ opt.image}}
      .label {{ opt.label}}

</template>
<script>
// prop 'options' Array of Object struct = [{ label, value, image }, ...]
import { defineComponent } from 'vue'
import { setupRadio } from './RadioBase'

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
    const { optionExt, toggleSelect, updateValue } = setupRadio(props, ctx)

    return { optionExt, toggleSelect, updateValue }
  },
})
</script>
<style scoped>
.radio-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.item-area {
  padding: 8px;
}

.item {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.radio {
  position: relative;
  width: 1rem;
  height: 1rem;
  margin-right: 8px;
  border: 1px solid grey;
  border-radius: 1rem;
  background-color: white;
  vertical-align: 0px;
}

.radio.selected::after {
  content: '';
  position: absolute;
  width: 80%;
  height: 80%;
  border-radius: 100%;
  background-color: yellowgreen;
  transform: translate(12.5%, 15%);
}

@media only screen and (max-width: 600px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>
