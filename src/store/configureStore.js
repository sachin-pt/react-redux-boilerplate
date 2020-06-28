import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export default ({
  preloadedState = {},
  extraParams = {},
  reducers = {}
} = {}) => {
  const rootReducer = combineReducers(reducers)
  let enhancers = applyMiddleware(thunk.withExtraArgument({ ...extraParams }))
  if (process.env.NODE_ENV !== 'production') {
    enhancers = composeWithDevTools(enhancers)
  }
  let store = createStore(rootReducer, preloadedState, enhancers)
  return store
}
