import { Tab } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import Header from '../partials/Header';
import axios from 'axios';

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
      counts: [
        {
          title: 'Unpacked',
          count: dashboardData?.deliveries?.unpacked || 0,
        },
        {
          title: 'Packed',
          count: dashboardData?.deliveries?.packed || 0,
        },
        {
          title: 'Shipped',
          count: dashboardData?.deliveries?.shipped || 0,
        },
        {
          title: 'Delivered',
          count: dashboardData?.deliveries?.delivered || 0,
        },
        {
          title: 'Cancelled',
          count: dashboardData?.deliveries?.cancelled || 0,
        },
      ],
    },
    {
      id: 'BRANCH_1',
      title: 'Branch 1',
      counts: [
        {
          title: 'Unpacked',
          count: dashboardData?.branchCounts?.BRANCH_1?.unpacked || 0,
        },
        {
          title: 'Packed',
          count: dashboardData?.branchCounts?.BRANCH_1?.packed || 0,
        },
        {
          title: 'Shipped',
          count: dashboardData?.branchCounts?.BRANCH_1?.shipped || 0,
        },
        {
          title: 'Delivered',
          count: dashboardData?.branchCounts?.BRANCH_1?.delivered || 0,
        },
        {
          title: 'Cancelled',
          count: dashboardData?.branchCounts?.BRANCH_1?.cancelled || 0,
        },
      ],
    },
    {
      id: 'BRANCH_2',
      title: 'Branch 2',
      counts: [
        {
          title: 'Unpacked',
          count: dashboardData?.branchCounts?.BRANCH_2?.unpacked || 0,
        },
        {
          title: 'Packed',
          count: dashboardData?.branchCounts?.BRANCH_2?.packed || 0,
        },
        {
          title: 'Shipped',
          count: dashboardData?.branchCounts?.BRANCH_2?.shipped || 0,
        },
        {
          title: 'Delivered',
          count: dashboardData?.branchCounts?.BRANCH_2?.delivered || 0,
        },
        {
          title: 'Cancelled',
          count: dashboardData?.branchCounts?.BRANCH_2?.cancelled || 0,
        },
      ],
    },
    {
      id: 'BRANCH_3',
      title: 'Branch 3',
      counts: [
        {
          title: 'Unpacked',
          count: dashboardData?.branchCounts?.BRANCH_3?.unpacked || 0,
        },
        {
          title: 'Packed',
          count: dashboardData?.branchCounts?.BRANCH_3?.packed || 0,
        },
        {
          title: 'Shipped',
          count: dashboardData?.branchCounts?.BRANCH_3?.shipped || 0,
        },
        {
          title: 'Delivered',
          count: dashboardData?.branchCounts?.BRANCH_3?.delivered || 0,
        },
        {
          title: 'Cancelled',
          count: dashboardData?.branchCounts?.BRANCH_3?.cancelled || 0,
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
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
                      'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                    )}
                  >
                    <ul>
                      {category.counts &&
                        category.counts.map((countItem, idx) => (
                          <li
                            key={idx}
                            className="relative rounded-md p-3 hover:bg-gray-100"
                          >
                            <h3 className="text-sm font-medium leading-5">
                              {countItem.title}
                            </h3>

                            <p className="mt-1 text-xs font-normal leading-4 text-gray-500">
                              Count: {countItem.count}
                            </p>
                          </li>
                        ))}
                    </ul>
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
