<template lang="pug">
.grid
  .select-box(v-for="opt, idx in optionExt" :key="opt.value")
    .card(:class="{selected: opt.selected}" @click="() => toggleSelect(opt)")
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
.grid {
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
}

.select-box {
  padding: 8px;
}

.select-box .card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100px;

  border: 1px solid rgba(128, 128, 128, 0.7);
  border-radius: 8px;
  padding: 8px;

  cursor: pointer;
  user-select: none;
}

.select-box .card.selected {
  background-color: rgba(120, 255, 120, 0.3);
}

@media only screen and (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, 50%);
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .grid {
    grid-template-columns: repeat(3, 33.33%);
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 33.33%);
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(3, 33.33%);
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(4, 25%);
  }
}
</style>
