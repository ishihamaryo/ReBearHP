// server/utils/microcms.ts

import { createClient, type MicroCMSQueries } from 'microcms-js-sdk';

// 1. 環境変数の取得
// useRuntimeConfig() はサーバーサイドのファイルでは使えないため、
// process.env から直接環境変数を取得します。
const config = useRuntimeConfig();

// 2. microCMSクライアントの初期化
// サービスドメインとAPIキーを渡してクライアントを作成します。
const microcmsClient = createClient({
  serviceDomain: config.public.microCMSServiceDomain as string, // 公開設定のドメイン
  apiKey: config.microCMSApiKey as string,                       // プライベート設定のAPIキー
});

/**
 * microCMSのリスト形式APIからコンテンツ一覧を取得する汎用関数
 * @param endpoint 取得したいAPIのエンドポイント (例: 'news', 'members')
 * @param queries クエリパラメータ (例: { limit: 10, offset: 0 })
 */
export const fetchContents = async <T>(
  endpoint: string,
  queries?: MicroCMSQueries
) => {
  return await microcmsClient.get<T>({
    endpoint,
    queries,
  });
};

/**
 * microCMSのコンテンツIDを指定して単一のコンテンツを取得する汎用関数
 * @param endpoint 取得したいAPIのエンドポイント (例: 'news')
 * @param contentId コンテンツID (例: '20240101-01')
 * @param queries クエリパラメータ
 */
export const fetchContentById = async <T>(
  endpoint: string,
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await microcmsClient.get<T>({
    endpoint,
    contentId,
    queries,
  });
};
