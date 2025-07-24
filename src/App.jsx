import './App.css'
import About from './Component/About/About'
import Home from './Component/Home/Home'
import { createBrowserRouter } from 'react-router'
import Layout from './Component/Layout/Layout.jsx'
import Portofolio from './Component/Portofolio/Portofolio.jsx'
import Contact from './Component/Contact/Contact.jsx'
import { RouterProvider } from 'react-router-dom'
import NotFound from './Component/NotFound/NotFound.jsx'


function App() {

  const routers = createBrowserRouter([ 
    {

      path: '/', element: <Layout/>, children: [
        { index:true , element: <Home/>},
        {path:'/about', element: <About/>},
        {path:'/Portofolio', element: <Portofolio/> },
        {path:'/Contact', element: <Contact/> },
        {path:'*', element:<NotFound/>}
      ]
    }

  ])

  return (
    <>


  <RouterProvider router={routers}></RouterProvider>


    </>
  )
}

export default App
