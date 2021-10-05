import { Reducer, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist-kaliber';
import storage from 'redux-persist-kaliber/lib/storage';

interface State {
  value: string;
  other: number;
}

declare const rootReducer: Reducer<State>;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return { store, persistor };
};
