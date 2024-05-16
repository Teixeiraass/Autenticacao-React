import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './page/Home'
import LoginPage from './page/Login'
import { AuthProvider } from './context/AuthProvider'
import ProtectRoute from './routes/ProtectedRoute'
import PublicRoute from './routes/PublicRoute'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicRoute><LoginPage /></PublicRoute>
  },
  {
    path: "/",
    element: <ProtectRoute><HomePage /></ProtectRoute>
  },
  {
    path: "*",
    element: <div>Error 404</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
