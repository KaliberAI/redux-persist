declare module "redux-persist-kaliber/es/createMigrate" {
  import { MigrationManifest, PersistMigrate, PersistedState } from "redux-persist-kaliber/es/types";

  interface MigrationConfig {
    debug: boolean;
  }

  /**
   * @desc Creates a migration path for your app's state.
   * @param migrations migration manifest
   * @param config migration configuration
   */
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function createMigrate(migrations: MigrationManifest, config?: MigrationConfig): PersistMigrate;
}

declare module "redux-persist-kaliber/lib/createMigrate" {
  export * from "redux-persist-kaliber/es/createMigrate";
  export { default } from "redux-persist-kaliber/es/createMigrate";
}
