declare module "redux-persist-kaliber/es/getStoredState" {
  import { PersistConfig } from "redux-persist-kaliber/es/types";

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function getStoredState(config: PersistConfig<any>): Promise<object | undefined>;
}

declare module "redux-persist-kaliber/lib/getStoredState" {
  export * from "redux-persist-kaliber/es/getStoredState";
  export { default } from "redux-persist-kaliber/es/getStoredState";
}
