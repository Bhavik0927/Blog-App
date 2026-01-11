
import React, { lazy } from 'react'
import Home from '../../Pages/Home';
import ForYou from '../../Pages/ForYou';
import Featured from '../../Pages/Featured';
import About from '../../Pages/About';
import MoreCategories from '../components/MoreCategories';

const FullBlog = lazy(() => import("../../Pages/FullBlog"));
const UserProfile = lazy(() => import('../pages/UserProfile'))

const readerRoutes = [
    {
        path:'/',
        element: <Home />,
        children: [
            {index:true, element: <ForYou />},
            {path: "featured", element: <Featured />}
        ]
    },
    {path: "about", element: <About />},
    {path: "see-more", element: <MoreCategories />},
    {path: ":username/:slug/:id", element: <FullBlog />},
    {path: "profile/:id", element: <UserProfile />}

];

export default readerRoutes