// Definitions by: Junyoung Clare Jang <https://github.com/Ailrun>
// TypeScript Version: 2.3

/// <reference path="constants.d.ts" />
/// <reference path="createMigrate.d.ts" />
/// <reference path="createPersistoid.d.ts" />
/// <reference path="createTransform.d.ts" />
/// <reference path="getStoredState.d.ts" />
/// <reference path="integration/getStoredStateMigrateV4.d.ts" />
/// <reference path="integration/react.d.ts" />
/// <reference path="persistCombineReducers.d.ts" />
/// <reference path="persistReducer.d.ts" />
/// <reference path="persistStore.d.ts" />
/// <reference path="purgeStoredState.d.ts" />
/// <reference path="stateReconciler/autoMergeLevel1.d.ts" />
/// <reference path="stateReconciler/autoMergeLevel2.d.ts" />
/// <reference path="stateReconciler/hardSet.d.ts" />
/// <reference path="storage/createWebStorage.d.ts" />
/// <reference path="storage/getStorage.d.ts" />
/// <reference path="storage/index.d.ts" />
/// <reference path="storage/session.d.ts" />
/// <reference path="types.d.ts" />

// This is not single module. There are many module included by reference directives.
// tslint:disable-next-line: no-single-declare-module
declare module "redux-persist-kaliber" {
  export { default as persistReducer } from 'redux-persist-kaliber/es/persistReducer';
  export { default as persistCombineReducers } from 'redux-persist-kaliber/es/persistCombineReducers';
  export { default as persistStore } from 'redux-persist-kaliber/es/persistStore';
  export { default as createMigrate } from 'redux-persist-kaliber/es/createMigrate';
  export { default as createTransform } from 'redux-persist-kaliber/es/createTransform';
  export { default as getStoredState } from 'redux-persist-kaliber/es/getStoredState';
  export { default as createPersistoid } from 'redux-persist-kaliber/es/createPersistoid';
  export { default as purgeStoredState } from 'redux-persist-kaliber/es/purgeStoredState';

  export * from "redux-persist-kaliber/es/constants";
  export * from "redux-persist-kaliber/es/types";
}
