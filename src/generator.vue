<template lang="pug">
component(:is="componentId" v-bind="$props")
</template>

<script>
import FieldInput from './coreComponents/fieldInput.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  props: [ 'model', 'data' ],
  components: { FieldInput },
  data() {
    return {
      componentId: 'FieldInput'
    }
  },
  setup(){
    return {
      // model: props.model
    }
  },
})
</script>

<style>

</style>