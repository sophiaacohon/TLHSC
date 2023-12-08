import { Tab } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import Header from '../partials/Header'
import axios from 'axios';

import { TbTruckDelivery, TbPackage, TbTruckLoading } from "react-icons/tb";
import { LuPackageOpen } from "react-icons/lu";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";
import { TbReceiptRefund } from "react-icons/tb";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

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

  let [categories] = useState({
    ALL: [
      {},
    ],
    BRANCH_1: [
      {},
    ],
    BRANCH_2: [
      {},
    ],
    BRANCH_3: [
      {},
    ],
  })

  return (
    <>
    <Header/>
    <main>
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
    <div className="w-full ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-white p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg text-md font-medium bg-rose-950 leading-5',
                  'w-full py-2.5 ring-offset-2 ring-offset-rose-950',
                  selected
                    ? 'text-white':
                    'bg-white text-rose-950 shadow hover:bg-zinc-200 hover:text-rose-950'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>


        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
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
  )
}
