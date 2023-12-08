import { Tab } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import Header from '../partials/Header';
import axios from 'axios';

import { TbTruckDelivery, TbPackage, TbTruckLoading } from "react-icons/tb";
import { LuPackageOpen } from "react-icons/lu";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";
import { TbReceiptRefund } from "react-icons/tb";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/dashboard-data')
      .then((response) => {
        console.log(response.data);
        setDashboardData(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch dashboard data:', error);
      });
  }, []);

  
  const categories = [
    {
      id: 'ALL',
      title: 'All',
      
      row: [
        {
          no: '',
          datetime: '',
          total: '',
          payment: '',
          payment_status: '',
          needdelivery: '',
        },

      ],
    },
    {
      id: 'Branch1',
      title: 'BRANCH 1',
      row: [
        {
          no: '',
          datetime: '',
          total: '',
          payment: '',
          payment_status: '',
          needdelivery: '',
        },
      ],
    },
    {
      id: 'Branch2',
      title: 'BRANCH 2',
      row: [
        {
          no: '',
          datetime: '',
          total: '',
          payment: '',
          payment_status: '',
          needdelivery: '',
        },
      ],
    },
    {
      id: 'Branch3',
      title: 'BRANCH 3',
      row: [
        {
          no: '',
          datetime: '',
          total: '',
          payment: '',
          payment_status: '',
          needdelivery: '',
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
           <h1 className="text-3xl font-bold tracking-tight text-rose-950">Employees</h1>
           <header className="bg-rose-950 shadow">
          <div className="relative items-center rounded-lg shadow justify-center pt-1 mt-2 mb-4">
          </div>
          </header>
          <div className="w-full ">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-white p-1">
                {categories.map((category) => (
                  <Tab
                    key={category.id}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg text-md font-medium bg-rose-950 leading-5',
                        'w-full py-2.5 ring-offset-2 ring-offset-rose-950',
                        selected
                          ? 'text-white'
                          : 'bg-white text-rose-950 shadow hover:bg-zinc-200 hover:text-rose-950'
                      )
                    }
                  >
                    {category.title}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels className="mt-2">
                {categories.map((category) => (
                  <Tab.Panel
                    key={category.id}
                    className={classNames(
                      'rounded-xl bg-white p-3',
                      'ring-white/60  focus:outline-none focus:ring-2'
                    )}
                  >

                <div class="flex items-center justify-center">
                <table>
                <thead className="text-xs text-white uppercase bg-rose-950 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {category.row.map((header, index) => (
                      <th key={index} scope="col" className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        {header.title}
                      </th>
                    ))}
                  </tr>
                </thead>

                  
                <tbody>
                {/* Sample data, replace this with your actual data */}
                {categories.map((row, index) => (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">{row.no}</td>
                    <td className="px-6 py-4">{row.datetime}</td>
                    <td className="px-6 py-4">{row.total}</td>
                    <td className="px-6 py-4">{row.payment}</td>
                    <td className="px-6 py-4">{row.payment_status}</td>
                    <td className="px-6 py-4">{row.needdelivery}</td>
                  </tr>
                ))}
                </tbody>
                </table>
               </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
          
        </div>
      </main>
    </>
  );
}