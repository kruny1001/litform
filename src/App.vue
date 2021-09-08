<template lang="pug">
//- CheckboxGrid(v-bind="checkbox" @data-update="(evt) => handleUpdate(evt, checkbox)")
//- CheckboxList(v-bind="checkbox" @data-update="(evt) => handleUpdate(evt, checkbox)")
//- CheckboxNormal(v-bind="checkbox" @data-update="(evt) => handleUpdate(evt, checkbox)")
//- RadioGrid(v-bind="radio" @data-update="(evt) => handleUpdate(evt, radio)")
//- RadioList(v-bind="radio" @data-update="(evt) => handleUpdate(evt, radio)")
//- RadioNormal(v-bind="radio" @data-update="(evt) => handleUpdate(evt, radio)")
//- div(style="width: 300px;")
//-   SelectDrop(v-bind="radio" @data-update="(evt) => handleUpdate(evt, radio)")
//- SelectInput(v-bind="radio" @data-update="(evt) => handleUpdate(evt, radio)")

//- InputNormal( v-bind="input")

component( 
  v-for="val in template" 
  :is="val.compName" 
  :value="user[val.modelKey]"
  v-bind="val"
  @data-update="userUpdate"
)

pre {{ user }}
//- pre {{ radio}}


</template>

<script>
import CheckboxList from './components/checkbox/CheckboxList.vue'
import CheckboxNormal from './components/checkbox/CheckboxNormal.vue'
import CheckboxGrid from './components/checkbox/CheckboxGrid.vue'

import RadioGrid from './components/radio/RadioGrid.vue'
import RadioList from './components/radio/RadioList.vue'
import RadioNormal from './components/radio/RadioNormal.vue'

import SelectDrop from './components/select/SelectDrop.vue'
import SelectInput from './components/select/SelectInput.vue'

import InputNormal from './components/input/InputNormal.vue'
import InputNumber from './components/input/InputNumber.vue'
import InputEmail from './components/input/InputEmail.vue'
import InputPassword from './components/input/InputPassword.vue'
import InputTextarea from './components/input/InputTextarea.vue'


export default {
  name: 'App',
  components: {
    CheckboxList,
    CheckboxNormal,
    CheckboxGrid,
    RadioGrid,
    RadioList,
    RadioNormal,
    SelectDrop,
    SelectInput,

    InputNormal,
    InputNumber,
    InputEmail,
    InputPassword,
    InputTextarea,
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
      user: {
        id: 1,
        name: 'John Doe',
        password: 'J0hnD03!x4',
        email: 'john.doe@gmail.com',
        desc: 'asdasdokqwpodkqpowk'
      },
      template: [
        {
          type: 'input',
          inputType: "number",
          label: "",
          modelKey: "id",
          readonly: false,
          required: false,
          validator: [],
          placeholder: "",
          hintText: "",

          compName: 'InputNumber',
        },
        {
          type: 'input',
          inputType: "text",
          label: "",
          modelKey: "name",
          readonly: false,
          required: false,
          validator: [],
          placeholder: "자기소개",
          hintText: "",

          compName: 'InputNormal',
        },
        {
          type: 'input',
          inputType: "password",
          label: "",
          value: "",
          modelKey: "password",
          readonly: false,
          required: false,
          validator: [],
          placeholder: "자기소개",
          hintText: "",

          compName: 'InputPassword',
        },
        {
          type: 'input',
          inputType: "email",
          label: "",
          value: "",
          modelKey: "email",
          readonly: false,
          required: false,
          validator: [],
          placeholder: "",
          hintText: "",

          compName: 'InputEmail',
        },
        {
          type: 'input',
          inputType: "textarea",
          label: "",
          value: "",
          modelKey: "desc",
          readonly: false,
          required: false,
          validator: [],
          placeholder: "자기소개",
          hintText: "",

          compName: 'InputTextarea',
        },
      ],
    }
  },
  methods: {
    handleUpdate({ key, newVal }, target) {
      target.value = newVal
    },

    userUpdate({ key, newVal }) {
      this.user[key] = newVal
    }
  },

}
</script>

<style lang="scss" scoped></style>
