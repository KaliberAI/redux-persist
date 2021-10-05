declare module "redux-persist-kaliber/es/storage/session" {
  import { WebStorage } from "redux-persist-kaliber/es/types";

  const sessionStorage: WebStorage;
  export default sessionStorage;
}

declare module "redux-persist-kaliber/lib/storage/session" {
  export * from "redux-persist-kaliber/es/storage/session";
  export { default } from "redux-persist-kaliber/es/storage/session";
}
