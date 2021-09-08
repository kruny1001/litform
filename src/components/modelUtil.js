export function updateModel(ctx, key, newVal) {
  if (!key) {
    throw 'model key is missing'
  }

  ctx.emit('data-update', { key, newVal })
}
