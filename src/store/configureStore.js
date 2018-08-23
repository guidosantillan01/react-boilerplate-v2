import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

// Store creation
export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer
    }),
    componseEnhancers(applyMiddleware(thunk))
  )

  return store
}