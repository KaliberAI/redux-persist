declare module "redux-persist-kaliber/es/storage/createWebStorage" {
  import { WebStorage } from "redux-persist-kaliber/es/types";

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function createWebStorage(type: string): WebStorage;
}

declare module "redux-persist-kaliber/lib/storage/createWebStorage" {
  export * from "redux-persist-kaliber/es/storage/createWebStorage";
  export { default } from "redux-persist-kaliber/es/storage/createWebStorage";
}
