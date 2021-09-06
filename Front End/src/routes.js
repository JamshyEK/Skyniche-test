import React from "react";
import Dashboard from '../src/Containers/UserContainer'
import Contact from '../src/Containers/ContactConatiner'
import Jstest from '../src/Containers/JavascriptTestContainer'
import GalTech from '../src/Containers/GalTechContainer'




const routes = [
  {
    path: "/",
    exact: true,
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/jstest",
    name: "Jstest",
    component: Jstest
  },
  {
    path: "/galTech",
    name: "GalTech",
    component: GalTech
  },

];

export default routes;
