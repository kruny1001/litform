import { computed, toRefs } from 'vue'

export function setupSelect(props, ctx) {
  let { value, options, modelKey } = toRefs(props)

  function updateValue(newVal) {
    ctx.emit('data-update', { key: modelKey.value, newVal })
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
