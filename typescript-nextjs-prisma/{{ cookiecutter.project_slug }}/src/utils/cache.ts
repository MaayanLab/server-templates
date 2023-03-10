const cache_key = Symbol('cache')

export default function cache<T>(key: string | symbol, identity: () => T, disable: boolean = false): T {
  if (disable) return identity()
  const global_ = global as any
  if (!global_[cache_key]) global_[cache_key] = {}
  if (!(key in global_[cache_key])) global_[cache_key][key] = identity()
  return global_[cache_key][key] as T
}
