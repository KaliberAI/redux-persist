declare module "redux-persist-kaliber/es/stateReconciler/autoMergeLevel2" {
  import { PersistConfig } from "redux-persist-kaliber";

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function autoMergeLevel2<S>(inboundState: S, originalState: S, reducedState: S, config: PersistConfig<S>): S;
}

declare module "redux-persist-kaliber/lib/stateReconciler/autoMergeLevel2" {
  export * from "redux-persist-kaliber/es/stateReconciler/autoMergeLevel2";
  export { default } from "redux-persist-kaliber/es/stateReconciler/autoMergeLevel2";
}
