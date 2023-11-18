import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Calender from './Admin/components/Calender';
import AppLayout from "../src/pages/AppLayout";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<AppLayout/>
    },
    {
      path: "/calender",
      element: <Calender/>
    },
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}

export default App