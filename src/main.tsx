import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { menuOptions } from './controller/menu'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()
const router = createBrowserRouter(menuOptions);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen p-4 text-white bg-gray-600">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  </React.StrictMode>
)
