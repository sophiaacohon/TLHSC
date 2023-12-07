import React from 'react'
import Header from '../partials/Header'

const Analytics = () => {
  return (
    <>
      <Header/>
      
      <header className="bg-white shadow">
          <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Analytics</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            

              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-zinc-200 uppercase bg-rose-950 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                              <th scope="col" class="px-6 py-3">
                                  Product name
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Color
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Category
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Price
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  <span class="sr-only">Edit</span>
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-zinc-200 dark:hover:bg-gray-600">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Apple MacBook Pro 17"
                              </th>
                              <td class="px-6 py-4">
                                  Silver
                              </td>
                              <td class="px-6 py-4">
                                  Laptop
                              </td>
                              <td class="px-6 py-4">
                                  $2999
                              </td>
                              <td class="px-6 py-4 text-right">
                                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>

          </div>
        </main>
    </>
  )
}

export default Analytics
