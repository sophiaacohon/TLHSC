import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { 
  createBrowserRouter, 
  RouterProvider, 
  Route 
} from 'react-router-dom'

import Dashboard from './components/admin/Dashboard'
import Analytics from './components/admin/Analytics'
import Inventory from './components/admin/Inventory'
import Transactions from './components/admin/Transactions'
import Employees from './components/admin/Employees'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard/>,
  },
  {
    path: '/analytics',
    element: <Analytics/>,
  },
  {
    path: '/inventory',
    element: <Inventory/>,
  },
  {
    path: '/transactions',
    element: <Transactions/>,
  },
  {
    path: '/employees',
    element: <Employees/>,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>

)
