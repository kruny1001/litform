import { computed, toRefs } from 'vue'

export function setupCheckbox(props, ctx) {
  let { value, options, modelKey } = toRefs(props)

  function updateValue(newVal) {
    ctx.emit('data-update', { key: modelKey.value, newVal })
  }
  function toggleSelect(opt) {
    const _value = value.value
    const selected = _value.includes(opt.value)
    if (selected) {
      const newVal = _value.filter((el) => el != opt.value)
      updateValue(newVal)
    } else {
      const newVal = [..._value, opt.value]
      updateValue(newVal)
    }
  }

  const optionExt = computed(() => {
    return options.value.map((opt) => {
      return { ...opt, selected: value.value.includes(opt.value) }
    })
  })

  return { optionExt, toggleSelect, updateValue }
}
