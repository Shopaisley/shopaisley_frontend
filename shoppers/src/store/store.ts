import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { appApi } from './slices/appSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [appApi.reducerPath]: appApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
})

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware: any) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }).concat(rootMiddleware),
//   });
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)