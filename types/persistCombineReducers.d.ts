declare module "redux-persist-kaliber/es/persistCombineReducers" {
  import { Action, Reducer, ReducersMapObject } from "redux";
  import { PersistPartial } from "redux-persist-kaliber/es/persistReducer";
  import { PersistConfig } from "redux-persist-kaliber/es/types";

  /**
   * @desc It provides a way of combining the reducers, replacing redux's @see combineReducers
   * @param config persistence configuration
   * @param reducers set of keyed functions mapping to the application state
   * @returns reducer
   */
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function persistCombineReducers<S, A extends Action = Action>(config: PersistConfig<S>, reducers: ReducersMapObject<S, A>): Reducer<S & PersistPartial, A>;
}

declare module "redux-persist-kaliber/lib/persistCombineReducers" {
  export * from "redux-persist-kaliber/es/persistCombineReducers";
  export { default } from "redux-persist-kaliber/es/persistCombineReducers";
}
