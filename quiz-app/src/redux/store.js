import {configureStore,combineReducers} from '@reduxjs/toolkit'
import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './authSlice';
import questionReducer from './questionSlice';
import resultReducer from './resultSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({auth : authReducer,questions : questionReducer,result : resultReducer})
const persistedReducer = persistReducer(persistConfig, rootReducer)

// const rootReducers = combineReducers({
//     auth : authReducer,
//     questions : questionReducer,
//     result : resultReducer,

// });


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)