// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // --- 既存の設定に追加するブロック ---
  runtimeConfig: {
    // サーバーサイドでのみ利用可能なプライベートな設定 (MICROCMS_API_KEY)
    microCMSApiKey: process.env.NUXT_MICROCMS_API_KEY, 
    
    // クライアントとサーバーの両方で利用可能なパブリックな設定 (SERVICE_DOMAIN)
    public: {
      microCMSServiceDomain: process.env.NUXT_PUBLIC_MICROCMS_SERVICE_DOMAIN
    }
  },


  vite: {
    server: {
      // 1. メインポートを3000に固定
      port: 3000, 
      hmr: {
        // 2. WebSocketポートを24679に固定
        port: 24679, 
      }
    }
  }
})