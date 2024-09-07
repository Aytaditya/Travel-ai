import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import CreateTrip from './page/create-trip/CreateTrip.jsx'
import Header from './components/custom/Header.jsx'
import { Toaster } from 'sonner'
import { ClerkProvider } from '@clerk/clerk-react'
import ViewTrip from './view-trip/[tripid]/ViewTrip.jsx'
import MyTrips from './my-trips/MyTrips.jsx'


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router=createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path:'create-trip',
    element:<CreateTrip/>
  },
  {
    path:'/view-trip/:tripId',
    element:<ViewTrip/>
  },
  {
    path:'/my-trips',
    element:<MyTrips/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Header/>
    <Toaster richColors />
    <RouterProvider router={router}/>
    </ClerkProvider>
  </StrictMode>,
)
