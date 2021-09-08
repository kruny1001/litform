<template lang="pug">
//- CheckboxGrid(v-bind="checkbox" @data-update="(evt) => handleUpdate(evt, checkbox)")
//- CheckboxList(v-bind="checkbox" @data-update="(evt) => handleUpdate(evt, checkbox)")
//- CheckboxNormal(v-bind="checkbox" @data-update="(evt) => handleUpdate(evt, checkbox)")
//- RadioGrid(v-bind="radio" @data-update="(evt) => handleUpdate(evt, radio)")
//- RadioList(v-bind="radio" @data-update="(evt) => handleUpdate(evt, radio)")
//- RadioNormal(v-bind="radio" @data-update="(evt) => handleUpdate(evt, radio)")
SelectInput(v-bind="radio" @data-update="(evt) => handleUpdate(evt, radio)")
pre {{ radio}}
</template>

<script>
import CheckboxList from './components/checkbox/CheckboxList.vue'
import CheckboxNormal from './components/checkbox/CheckboxNormal.vue'
import CheckboxGrid from './components/checkbox/CheckboxGrid.vue'
import RadioGrid from './components/radio/RadioGrid.vue'
import RadioList from './components/radio/RadioList.vue'
import RadioNormal from './components/radio/RadioNormal.vue'
import SelectInput from './components/select/SelectInput.vue'

export default {
  name: 'App',
  components: {
    CheckboxList,
    CheckboxNormal,
    CheckboxGrid,
    RadioGrid,
    RadioList,
    RadioNormal,
    SelectInput,
  },
  data() {
    return {
      checkbox: {
        options: [
          {
            label: '체크박스 라벨 1',
            value: 1,
            image: '체크박스 이미지 1',
          },
          {
            label: '체크박스 라벨 2',
            value: 2,
            image: '체크박스 이미지 2',
          },
          {
            label: '체크박스 라벨 3',
            value: 3,
            image: '체크박스 이미지 3',
          },
        ],
        label: '라벨',
        value: [1, 3],
        image: '이미지',
        modelKey: 'key',
        required: false,
        validator: [],
      },

      radio: {
        options: [
          {
            label: '라디오 라벨 1',
            value: 1,
            image: '라디오 이미지 1',
          },
          {
            label: '라디오 라벨 2',
            value: 2,
            image: '라디오 이미지 2',
          },
          {
            label: '라디오 라벨 3',
            value: 3,
            image: '라디오 이미지 3',
          },
        ],
        label: '라벨',
        value: 1,
        image: '이미지',
        modelKey: 'key',
        required: false,
        validator: [],
      },
    }
  },
  methods: {
    handleUpdate({ key, newVal }, target) {
      target.value = newVal
    },
  },
}
</script>

<style lang="scss" scoped></style>
