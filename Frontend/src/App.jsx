import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Body from './Components/Body';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { Provider } from 'react-redux';
import store from './Store/Store';
import EditBlog from './Pages/EditBlog';
import { lazy, Suspense } from 'react';
import MoreCategories from './Pages/MoreCategories';
import Featured from './Pages/Featured';
import ForYou from './Pages/ForYou';

const EditProfile = lazy(() => import('./Pages/EditProfile'));
const Myblogs = lazy(() => import('./Pages/MyProfile'));
const SaveBlogs = lazy(() => import('./Pages/SaveBlogs'));
const FullBlog = lazy(() => import('./Pages/FullBlog'));
const AddBlogCard = lazy(() => import("./Components/AddBlogCard"));
const UserProfile = lazy(() => import("./Pages/UserProfile"));

const App = () => {

  console.log("App Page");

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Body />}>

              <Route path="/" element={<Home />}>
                <Route index element={<ForYou />} />
                {/* <Route path="following" element={<Following />} /> */}
                <Route path="/featured" element={<Featured />} />
              </Route>

              <Route path="/card" element={<AddBlogCard />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/myprofile" element={<Myblogs />} />
              <Route path="/editblog/:id" element={<EditBlog />} />
              <Route path="/saveblogs" element={<SaveBlogs />} />
              <Route path="/:username/:slug/:id" element={<FullBlog />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/see-more" element={<MoreCategories />} />
              <Route path="/profile/:id" element={<UserProfile />} />
              <Route path="/featured" element={<Featured />} />
              <Route path="*" element={<h1>There is No Route</h1>} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
