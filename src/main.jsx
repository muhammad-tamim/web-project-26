// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import { RouterProvider } from 'react-router';
import { Routes } from './routes/Routes';
import MaxWidth from './components/ui/MaxWidth';
import AuthProvider from './providers/AuthProvider';
import { Toaster } from 'react-hot-toast';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MaxWidth>
      <AuthProvider>
        <RouterProvider router={Routes}></RouterProvider>
        <Toaster position='top-right'></Toaster>
      </AuthProvider>
    </MaxWidth>
  </StrictMode>,
)