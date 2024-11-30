import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './Route/Root.tsx'
import Contact from './Route/contact.tsx'
import ErrorPage from './Errorpage.tsx'



const router= createBrowserRouter([ 
  {
    path: '/',
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
   
      {
        path:'/contacts/:contactId',
        element: <Contact/>,
        errorElement: <ErrorPage/>
      },
    ]

    
  },
  
  
])

createRoot(document.getElementById('root')!).render(



  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
)
