import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import session from 'redux-persist/lib/storage/session'
import storage from 'redux-persist/lib/storage'

import favoritesReducer from './favoritesReducer'


const rootReducer = combineReducers({
    favoritesReducer: persistReducer({ key: 'FAVORITES', storage }, favoritesReducer),
})

export default rootReducer