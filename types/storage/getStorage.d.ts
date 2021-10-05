declare module "redux-persist-kaliber/es/storage/getStorage" {
  import { Storage } from "redux-persist-kaliber/es/types";

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function getStorage(type: string): Storage;
}

declare module "redux-persist-kaliber/lib/storage/getStorage" {
  export * from "redux-persist-kaliber/es/storage/getStorage";
  export { default } from "redux-persist-kaliber/es/storage/getStorage";
}
