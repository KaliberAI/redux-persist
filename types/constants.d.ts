declare module "redux-persist-kaliber/es/constants" {
  const KEY_PREFIX: 'persist:';
  const FLUSH: 'persist/FLUSH';
  const REHYDRATE: 'persist/REHYDRATE';
  const PAUSE: 'persist/PAUSE';
  const PERSIST: 'persist/PERSIST';
  const PURGE: 'persist/PURGE';
  const REGISTER: 'persist/REGISTER';
  const DEFAULT_VERSION: number;
}

declare module "redux-persist-kaliber/lib/constants" {
  export * from "redux-persist-kaliber/es/constants";
}
