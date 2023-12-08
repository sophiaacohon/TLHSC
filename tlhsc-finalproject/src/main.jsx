import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { 
  createBrowserRouter, 
  RouterProvider, 
  Route 
} from 'react-router-dom'

import Dashboard from './components/admin/Dashboard'
import Inventory from './components/admin/Inventory'
import Transactions from './components/admin/Transactions'
import Employees from './components/admin/Employees'

import mDashboard from './components/manager/mDashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard/>,
  },
  {
    path: '/admin/inventory',
    element: <Inventory/>,
  },
  {
    path: '/admin/transactions',
    element: <Transactions/>,
  },
  {
    path: '/admin/employees',
    element: <Employees/>,
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>

)
