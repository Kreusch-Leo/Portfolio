import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WhoAmI from './pages/WhoAmI.tsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Projects from './pages/Projects.tsx'
import Contacts from './pages/Contact.tsx'

const router = createHashRouter([ // Changed this
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/whoami',
    element: <WhoAmI />,
  },
  {
    path: '/projects',
    element: <Projects />, 
  },
  {
    path: '/contacts',
    element: <Contacts />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)