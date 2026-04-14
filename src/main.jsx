import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './router/Router.jsx'
import FriendContext, { FriendsContext } from './components/context/FriendContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className='geist'>
  <FriendContext>
     <RouterProvider router={router}>

  </RouterProvider>
  </FriendContext>
  </div>
  </StrictMode>,
)
