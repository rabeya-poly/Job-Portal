import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom"
import router from './router/router.jsx'
import AuthProvider from './context/AuthProvider.jsx/AuthProvider.jsx'
import auth from './firebase/firebase.init.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </StrictMode>,
)
