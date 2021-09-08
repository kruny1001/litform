import { computed, toRefs } from 'vue'
import { updateModel } from '../modelUtil'

export function setupRadio(props, ctx) {
  let { value, options, modelKey } = toRefs(props)

  function updateValue(newVal) {
    updateModel(ctx, modelKey.value, newVal)
  }
  function toggleSelect(opt) {
    const _value = value.value
    const selected = _value == opt.value
    if (selected) {
      return
    } else {
      const newVal = opt.value
      updateValue(newVal)
    }
  }

  const optionExt = computed(() => {
    return options.value.map((opt) => {
      return { ...opt, selected: value.value == opt.value }
    })
  })

  return { optionExt, toggleSelect, updateValue }
}
