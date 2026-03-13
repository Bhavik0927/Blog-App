
import React, { lazy } from 'react'
import Home from '../pages/Home.jsx'
import ForYou from '../pages/ForYou.jsx';
import Featured from '../Pages/Featured';
import About from '../../shared/components/About.jsx'
import MoreCategories from '../components/MoreCategories';
import Explore from '../pages/Explore.jsx';

const FullBlog = lazy(() => import("../Pages/FullBlog")); 
const UserProfile = lazy(() => import('../pages/UserProfile'))

const readerRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <ForYou /> },
      { path: "featured", element: <Featured /> },
    ],
  },
  { path: "about", element: <About /> },
  { path: "explore", element: <Explore /> },
  { path: "see-more", element: <MoreCategories /> },
  { path: ":username/:slug/:id", element: <FullBlog /> },
  { path: "profile/:id", element: <UserProfile /> },
];

export default readerRoutes