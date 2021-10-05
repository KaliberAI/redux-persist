declare module "redux-persist-kaliber/es/stateReconciler/hardSet" {
  import { PersistConfig } from "redux-persist-kaliber";

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function hardSet<S>(inboundState: S): S;
}

declare module "redux-persist-kaliber/lib/stateReconciler/hardSet" {
  export * from "redux-persist-kaliber/es/stateReconciler/hardSet";
  export { default } from "redux-persist-kaliber/es/stateReconciler/hardSet";
}
