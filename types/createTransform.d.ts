declare module "redux-persist-kaliber/es/createTransform" {
  import { PersistConfig, Transform, TransformInbound, TransformOutbound } from "redux-persist-kaliber/es/types";

  interface TransformConfig {
    whitelist?: Array<string>;
    blacklist?: Array<string>;
  }

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function createTransform<HSS, ESS, S = any, RS = any>(
    inbound?: TransformInbound<HSS, ESS, S> | null,
    outbound?: TransformOutbound<ESS, HSS, RS> | null,
    config?: TransformConfig,
  ): Transform<HSS, ESS, S, RS>;
}

declare module "redux-persist-kaliber/lib/createTransform" {
  export * from "redux-persist-kaliber/es/createTransform";
  export { default } from "redux-persist-kaliber/es/createTransform";
}
