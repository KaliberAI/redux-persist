declare module "redux-persist-kaliber/es/purgeStoredState" {
  import { PersistConfig } from "redux-persist-kaliber/es/types";
  /**
   * @desc Removes stored state.
   * @param config persist configuration
   */
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function purgeStoredState<S>(config: PersistConfig<S>): any;
}

declare module "redux-persist-kaliber/lib/purgeStoredState" {
  export * from "redux-persist-kaliber/es/purgeStoredState";
  export { default } from "redux-persist-kaliber/es/purgeStoredState";
}
