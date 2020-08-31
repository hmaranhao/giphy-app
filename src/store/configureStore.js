import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import reducers from '../reducers'

function configureStore () {
  const store = createStore(reducers)
  const persistor = persistStore(store)

  return { persistor, store }
}

export default configureStore
