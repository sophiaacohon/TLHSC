import {BiCategory, BiBarChart , BiBox, BiFoodMenu, BiDollarCircle, BiGroup } from "react-icons/bi"
import { SiLightning } from "react-icons/si"
import Sidebar, {SidebarItem} from '../partials/Sidebar'
import Header from '../partials/Header'
import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/dashboard-data')
      .then((response) => {
        setDashboardData(response.data);
      })
      .catch((error) => {
        console.error('fail', error);
      });
  }, []);
  return (
    <>
      <Header />
        <header className="bg-white">
          <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
        <div>
      <h2>Dashboard</h2>

      {dashboardData && (
        <div>
          <div>
            <h3>Deliveries</h3>
            <ul>
              {dashboardData.deliveries.map((delivery) => (
                <li key={delivery.status}>
                  {delivery.status}: {delivery.count}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Sold Products</h3>
            <p>{dashboardData.soldProducts}</p>
          </div>
        </div>
      )}
    </div>
        </main>

    </>
  )
}

export default Dashboard
