<template lang="pug">
.label {{ label}}
.select-container(@blur="closeMenu" )
  .select(@click="toggleMenu")
    .crnt-select {{ crntOption.label }} 
  .item-list(:class="{open: open}")
    .item(v-for="opt, idx in optionExt" :key="opt.value" 
          :class="{selected: opt.selected}"
          @click="clickOption(opt)") 
      .item-label {{ opt.label}}
</template>
<script>
import { defineComponent } from 'vue'
import { setupSelect } from './SelectBase'

export default defineComponent({
  props: {
    options: { type: Array, required: true },
    label: { type: String },
    value: { type: [String, Number] },
    image: { type: String },
    modelKey: { type: String },
    required: { type: Boolean },
    validator: { type: Array },
  },
  setup(props, ctx) {
    const { optionExt, handleSelect, updateValue } = setupSelect(props, ctx)
    return { optionExt, handleSelect, updateValue }
  },
  data() {
    return {
      open: false,
    }
  },
  computed: {
    crntOption() {
      const crnt = this.options.find((opt) => opt.value == this.value)
      return crnt ?? {}
    },
  },
  methods: {
    closeMenu() {
      this.open = false
    },
    openMunu() {
      this.open = true
    },
    toggleMenu() {
      this.open = !this.open
    },
    clickOption(opt) {
      console.log(opt)
      this.handleSelect(opt)
      this.closeMenu()
    },
  },
})
</script>
<style scoped>
.select-container {
  position: relative;
  width: 100%;
  user-select: none;
  outline: 1px solid grey;
}

.select {
  cursor: pointer;
  padding: 8px calc(1em + 8px) 8px 8px;
}

.crnt-select {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select::after {
  position: absolute;
  content: '';
  top: calc(50% - 3px);
  right: 0.5em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #000 transparent transparent transparent;
}

.item-list {
  position: absolute;
  z-index: 1;
  /* padding-top: 4px; */
  display: none;
  min-width: 100%;
  background-color: white;
  outline: 1px solid grey;
}

.item-list.open {
  display: block;
}

.item {
  cursor: pointer;
  padding: 8px 8px;
}

.item:hover {
  background-color: whitesmoke;
}

.item-label {
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
