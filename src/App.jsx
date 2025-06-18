import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import SplineScene from './SplineScene';
import {Login} from './login.jsx'; // <-- Your Login component
import { Signup } from './SignUp.jsx';
// ... other pages
import UploadPrescription from './UploadPrescription.jsx'
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      children:[
        {
          path:'/',
          element: <SplineScene />
        },
        {
          path:'/login',
          element:<Login />
        },
        {
          path:'/signup',
          element:<Signup />
        },
        {
          path:'/upload',
          element:<UploadPrescription />
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
