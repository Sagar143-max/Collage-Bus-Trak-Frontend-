import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from './store/Stored.js'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Profile from './pages/profile.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

        {
            path: "/profile",
            element: (       
                    <Profile />
            ),
        },
    ],
},
])







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/> 
    </Provider>
  </StrictMode>,
)
