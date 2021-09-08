import { computed, toRefs } from 'vue'
import { updateModel } from '../modelUtil'
export function setupUpload(props, ctx) {
  let { value, options, modelKey } = toRefs(props)

  function updateValue(newVal) {
    updateModel(ctx, modelKey.value, newVal)
  }

  return { updateValue }
}
