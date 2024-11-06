import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Error from './components/Error'
import Doctors from './components/Doctors'
import MyProfile from './components/MyProfile'
import MyAppointments from './components/MyAppointments'
import Appointment from './components/Appointment'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/doctors',
        element: <Doctors />
      },
      {
        path: '/doctors/:specialty',
        element: <Doctors />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/my-profile',
        element: <MyProfile />
      },
      {
        path: '/my-appointments',
        element: <MyAppointments />
      },
      {
        path: '/appointment/:docId',
        element: <Appointment />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
