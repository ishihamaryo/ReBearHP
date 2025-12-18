import dayjs from 'dayjs'
import 'dayjs/locale/ja'

export default defineNuxtPlugin(() => {
  // アプリ全体のデフォルトロケールを日本語に設定
  dayjs.locale('ja')

  return {
    provide: {
      // useNuxtApp().$dayjs で利用可能
      dayjs
    }
  }
})
