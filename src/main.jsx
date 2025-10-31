// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import { RouterProvider } from 'react-router';
import { Routes } from './routes/Routes';
import MaxWidth from './components/ui/MaxWidth';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MaxWidth>
      <RouterProvider router={Routes}></RouterProvider>
    </MaxWidth>
  </StrictMode>,
)