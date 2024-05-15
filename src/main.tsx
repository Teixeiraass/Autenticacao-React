import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './page/Home'
import LoginPage from './page/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/home",
    element: <HomePage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
