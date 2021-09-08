import { computed, toRefs } from 'vue'
import { updateModel } from '../modelUtil'
export function setupSelect(props, ctx) {
  let { value, options, modelKey } = toRefs(props)

  function updateValue(newVal) {
    updateModel(ctx, modelKey.value, newVal)
  }

  function handleSelect(opt) {
    updateValue(opt.value)
  }

  const optionExt = computed(() => {
    return options.value.map((opt) => {
      return { ...opt, selected: value.value == opt.value }
    })
  })

  return { optionExt, handleSelect, updateValue }
}
