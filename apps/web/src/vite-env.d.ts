/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string = "http://admin.harvesterwala.com:3200/api/v1";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
