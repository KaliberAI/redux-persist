declare module "redux-persist-kaliber/es/createPersistoid" {
  import { PersistConfig, Persistoid } from "redux-persist-kaliber/es/types";

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function createPersistoid(config: PersistConfig<any>): Persistoid;
}

declare module "redux-persist-kaliber/lib/createPersistoid" {
  export * from "redux-persist-kaliber/es/createPersistoid";
  export { default } from "redux-persist-kaliber/es/createPersistoid";
}
