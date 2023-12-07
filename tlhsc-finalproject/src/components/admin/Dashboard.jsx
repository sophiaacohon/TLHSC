import {BiCategory, BiBarChart , BiBox, BiFoodMenu, BiDollarCircle, BiGroup } from "react-icons/bi"
import { SiLightning } from "react-icons/si"
import Sidebar, {SidebarItem} from '../partials/Sidebar'
import { TbTruckDelivery, TbPackage, TbTruckLoading } from "react-icons/tb";
import { LuPackageOpen } from "react-icons/lu";
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
        <header className="bg-white shadow">
          <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

      {dashboardData && (
        <div>
          <div>


          <div class="inline-block mr-5 mb-5 max-w-sm p-6 bg-rose-950 border border-gray-200 rounded-lg shadow hover:bg-yellow-800 hover:border-zinc-400">
              <ul>              
              <h5 class="mb-2 text-2xl font-bold inline-block tracking-tight text-zinc-300 dark:text-white pr-3"> 
              <LuPackageOpen class="text-zinc-300 block text-5xl mr-4 "/>Unpacked</h5>
              {dashboardData.deliveries.map((delivery) => (
                <li className='mb-2 mt-6 pl-24 block text-3xl font-bold tracking-tight text-white dark:text-white mr-2' key={delivery.status}>
                  {/*insert data for pending status*/}
                </li>
                
              ))}
            </ul>
            </div>

            <div class="inline-block mr-5 mb-5 max-w-sm p-6 bg-rose-950 border border-gray-200 rounded-lg shadow hover:bg-yellow-800 hover:border-zinc-400">
              <ul>              
              <h5 class="mb-2 text-2xl font-bold inline-block tracking-tight text-zinc-300 dark:text-white pr-3"> 
              <TbPackage class="text-zinc-300 block text-5xl mr-4 "/>Packed</h5>
              {dashboardData.deliveries.map((delivery) => (
                <li className='mb-2 mt-6 pl-24 block text-3xl font-bold tracking-tight text-white dark:text-white mr-2' key={delivery.status}>
                  {dashboardData.soldProducts}
                </li>
                
              ))}
            </ul>
            </div>

            <div class="inline-block mr-5 mb-5 max-w-sm p-6 bg-rose-950 border border-gray-200 rounded-lg shadow hover:bg-yellow-800 hover:border-zinc-400">
              <ul>              
              <h5 class="mb-2 text-2xl font-bold inline-block tracking-tight text-zinc-300 dark:text-white pr-3"> 
              <TbTruckDelivery class="text-zinc-300 block text-5xl mr-4 "/>Shipped</h5>
              {dashboardData.deliveries.map((delivery) => (
                <li className='mb-2 mt-6 pl-24 block text-3xl font-bold tracking-tight text-white dark:text-white mr-2' key={delivery.status}>
                  {/*insert data for shipped status*/}
                </li>
                
              ))}
            </ul>
            </div>

            <div class="inline-block mr-5 mb-5 max-w-sm p-6 bg-rose-950 border border-gray-200 rounded-lg shadow hover:bg-yellow-800 hover:border-zinc-400">
              <ul>              
              <h5 class="mb-2 text-2xl font-bold inline-block tracking-tight text-zinc-300 dark:text-white pr-3"> 
              <TbTruckDelivery class="text-zinc-300 block text-5xl mr-4 "/>Delivered</h5>
              {dashboardData.deliveries.map((delivery) => (
                <li className='mb-2 mt-6 pl-24 block text-3xl font-bold tracking-tight text-white dark:text-white mr-2' key={delivery.status}>
                  {delivery.count}
                </li>
                
              ))}
            </ul>
            </div>
            
            <div class="inline-block mr-5 mb-5 max-w-sm p-6 bg-rose-950 border border-gray-200 rounded-lg shadow hover:bg-yellow-800 hover:border-zinc-400">
              <ul>              
              <h5 class="mb-2 text-2xl font-bold inline-block tracking-tight text-zinc-300 dark:text-white pr-3"> 
              <TbTruckDelivery class="text-zinc-300 block text-5xl mr-4 "/>Cancelled</h5>
              {dashboardData.deliveries.map((delivery) => (
                <li className='mb-2 mt-6 pl-24 block text-3xl font-bold tracking-tight text-white dark:text-white mr-1' key={delivery.status}>
                  {/*insert data for cancelled status*/}
                
                </li>
                
              ))}
            </ul>
            </div>


  
          </div>
        </div>
      )}
    </div>
        </main>

    </>
  )
}

export default Dashboard
