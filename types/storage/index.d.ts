declare module "redux-persist-kaliber/es/storage" {
  import { WebStorage } from "redux-persist-kaliber/es/types";

  const localStorage: WebStorage;
  export default localStorage;
}

declare module "redux-persist-kaliber/lib/storage" {
  export * from "redux-persist-kaliber/es/storage";
  export { default } from "redux-persist-kaliber/es/storage";
}
