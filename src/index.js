import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'
import './scss/index.scss'

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
