declare module "redux-persist-kaliber/es/persistStore" {
  import { Store, Action, AnyAction } from 'redux';
  import { PersistorOptions, Persistor } from "redux-persist-kaliber/es/types";

  /**
   * @desc Creates a persistor for a given store.
   * @param store store to be persisted (or match an existent storage)
   * @param persistorOptions enhancers of the persistor
   * @param callback bootstrap callback of sort.
   */
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function persistStore<S = any, A extends Action<any> = AnyAction>(store: Store<S, A>, persistorOptions?: PersistorOptions | null, callback?: () => any): Persistor;
}

declare module "redux-persist-kaliber/lib/persistStore" {
  export * from "redux-persist-kaliber/es/persistStore";
  export { default } from "redux-persist-kaliber/es/persistStore";
}
