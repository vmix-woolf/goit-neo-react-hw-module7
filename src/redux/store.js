import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { contactsReducer } from './contactsSlice'
import { filtersReducer } from './filtersSlice'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items'],
}

const rootReducer = combineReducers({
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
    filters: filtersReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
