<template lang="pug">
section
  Generator( :model="model" :data="testData")
</template>

<script>
import Generator from './generator.vue'

export default {
  name: 'App',
  components: {
    Generator
  },
  data() {
    return {
      testData: {
        id: 1,
        name: 'asd'
      },
      model: {
        type: "input",
        inputType: "text",
        label: "텍스트",
        modelKey: "name",
        readonly: false,
        validator: '',
        placeholder: '텍스트 필드',
        hintText: '텍스트 필드 입니다.'
      }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
