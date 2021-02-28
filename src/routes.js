
import React from 'react'
import Home from './screens/Home/Home';
import About from './screens/About/About';
import Contact from './screens/Contacts/Contacts';


const routes = [

    {
      path: '/',
      children: [
        { path: '/', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact/> },
     
      ]
    }
  ];
  
  export default routes;