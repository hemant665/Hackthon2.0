import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, Career, Contact, Marketplace, Plans, Support, Home, Book, Solution, Login } from './Pages/index.js'
import CustomCursor from './Components/CustomCursor.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'marketplace',
        element: <Marketplace/>
      },
      {
        path:'plans',
        element: <Plans/>
      },
      {
        path:'career',
        element: <Career/>
      },
      {
        path:'about',
        element: <About/>
      },
      {
        path:'contact',
        element: <Contact/>
      },
      {
        path:'support',
        element: <Support/>
      },
      {
        path:'solutions',
        element: <Solution/>
      },
      {
        path:'book',
        element: <Book/>
      },

    ],
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signUp',
    element: <SignUp/>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <CustomCursor/>
  </StrictMode>,
)
