import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../store/slices/root.slice';
import logSlice from './slices/log.slice';

const store = configureStore({
    reducer: {
        root: rootReducer,
        log:logSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
