import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Layout from './Layout.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github from './components/gitHub/Github.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,

    children:[
      {path:"",element:<Home/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
      {path:"user/:userid",element:<User/>},
      {path:"github", element:<Github/>}
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
