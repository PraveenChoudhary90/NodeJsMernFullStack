import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import Store from './Store.jsx'
import Store1 from './Store1.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store} store1={Store1}>
    <App />
    </Provider>
  </StrictMode>,
)
