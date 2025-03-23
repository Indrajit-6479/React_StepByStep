import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Exercise1 from "./Exercise1.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
        <Exercise1/>
    </StrictMode>,
)
