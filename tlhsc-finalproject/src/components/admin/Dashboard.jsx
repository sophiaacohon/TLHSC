import {BiCategory, BiBarChart , BiBox, BiFoodMenu, BiDollarCircle, BiGroup } from "react-icons/bi"
import { SiLightning } from "react-icons/si"
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
      <Header/>
        
        <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

      {dashboardData && (

        <div>

          <h1 className="text-2xl font-bold tracking-tight justify-center mb-2 text-gray-900">Deliveries</h1>

          <header className="bg-white shadow">
          <div className="relative items-center rounded-lg shadow justify-center pt-1 mb-5">
          </div>
          </header>

          <div class="flex items-center justify-center">
            

          <div class="inline-block m-3 ax-w-sm p-6 border border-gray-200 rounded-lg shadow bg-zinc-600 hover:bg-zinc-700 hover:border-zinc-400">
              <ul>              
              <h5 class="mb-2 text-2xl font-bold inline-block tracking-tight text-zinc-300 dark:text-white pr-3"> 
              <LuPackageOpen class="text-zinc-300 block text-5xl mr-4 "/>Unpacked</h5>
              {dashboardData.deliveries.map((delivery) => (
                <li className='mb-2 mt-12 pl-24 block text-3xl font-bold tracking-tight text-white dark:text-white mr-2' key={delivery.status}>
                  {/*insert data for pending status*/}
                  {dashboardData.soldProducts}
                </li>
                
              ))}
            </ul>
            </div>

            <div class="inline-block m-3 max-w-sm p-6 hover:bg-blue-900 border border-gray-200 rounded-lg shadow bg-blue-600 hover:border-zinc-400">
              <ul>              
              <h5 class="mb-2 text-2xl font-bold inline-block tracking-tight text-zinc-300 dark:text-white pr-3"> 
              <TbPackage class="text-zinc-300 block text-5xl mr-4 "/>Packed</h5>
              {dashboardData.deliveries.map((delivery) => (
                <li className='mb-2 mt-12 pl-24 block text-3xl font-bold tracking-tight text-white dark:text-white mr-2' key={delivery.status}>
                  {dashboardData.soldProducts}
                </li>
                
              ))}
            </ul>
            </div>

            <div class="inline-block m-3 max-w-sm p-6 hover:bg-violet-900 border border-gray-200 rounded-lg shadow bg-violet-600 hover:border-zinc-400">
              <ul>              
              <h5 class="mb-2 text-2xl font-bold inline-block tracking-tight text-zinc-300 dark:text-white pr-3"> 
              <TbTruckDelivery class="text-zinc-300 block text-5xl mr-4 "/>Shipped</h5>
              {dashboardData.deliveries.map((delivery) => (
                <li className='mb-2 mt-12 pl-24 block text-3xl font-bold tracking-tight text-white dark:text-white mr-2' key={delivery.status}>
                  {/*insert data for shipped status*/}
                  {dashboardData.soldProducts}
                </li>
                
              ))}
            </ul>
            </div>

            <div class="inline-block m-3 max-w-sm p-6 hover:bg-lime-700 border border-gray-200 rounded-lg shadow bg-lime-500 hover:border-zinc-400">
              <ul>              
              <h5 class="mb-2 text-2xl font-bold inline-block tracking-tight text-zinc-300 dark:text-white pr-3"> 
              <TbTruckDelivery class="text-zinc-300 block text-5xl mr-4 "/>Delivered</h5>
              {dashboardData.deliveries.map((delivery) => (
                <li className='mb-2  mt-12 pl-24 block text-3xl font-bold tracking-tight text-white dark:text-white mr-2' key={delivery.status}>
                  {delivery.count}
                </li>
                
              ))}
            </ul>
            </div>
            
            <div class="inline-block m-3 max-w-sm p-6 hover:bg-red-900  border border-gray-200 rounded-lg shadow bg-red-700 hover:border-zinc-400">
              <ul>              
              <h5 class="mb-2 text-2xl font-bold inline-block tracking-tight text-zinc-300 dark:text-white pr-3"> 
              <TbTruckDelivery class="text-zinc-300 block text-5xl mr-4 "/>Cancelled</h5>
              {dashboardData.deliveries.map((delivery) => (
                <li className='mb-2  mt-12 pl-24 block text-3xl font-bold tracking-tight text-white dark:text-white mr-1' key={delivery.status}>
                  {/*insert data for cancelled status*/}
                  {dashboardData.soldProducts}
                </li>
                
              ))}
            </ul>
            </div>

  
          </div>
        </div>
      )}

          <h1 className="text-2xl mt-16 font-bold tracking-tight justify-center mb-2 text-gray-900">Orders</h1>

          <header className="bg-white shadow">
          <div className="relative items-center rounded-lg shadow justify-center pt-1 mb-5">
          </div>
          </header>



    </div>
        </main>

    </>
  )
}

export default Dashboard
