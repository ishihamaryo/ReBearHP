// シンプルな型付きラッパー
export const useDayjs = () => {
  const nuxtApp = useNuxtApp()
  // プラグインで provide した dayjs インスタンスを返す
  return nuxtApp.$dayjs as typeof import('dayjs').default
}