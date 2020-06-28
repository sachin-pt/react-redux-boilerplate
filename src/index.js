import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore.js'
import reducers from 'store/reducers/index.js'
import App from 'src/App.js'

const store = configureStore({ reducers })
function MainComponent () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
ReactDOM.render(<MainComponent />, document.getElementById('root'))
