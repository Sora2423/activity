import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx'
import './assets/css/theme-rtl.css'
import './assets/css/theme-rtl.min.css'
import './assets/css/theme.css'
import './assets/css/theme.min.css'
import './assets/css/user-rtl.css'
import './assets/css/user-rtl.min.css'
import './assets/css/user.css'
import './assets/css/user.min.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
