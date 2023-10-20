import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './app/styles/index.css'
import './widgets/BurgerMenu/BurgerMenu.css';
import './app/styles/media.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
