import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Login from "./auth/pages/Login";
import Body from "./auth/components/Body";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { Suspense } from "react";
import readerRoutes from "./Reader/routes/readerRoutes";
import writerRoutes from "./Writer/routes/writerRoutes";
import Signup from "./auth/pages/Signup";
import EditProfile from "./auth/components/EditProfile";
import MyProfile from "./Reader/pages/MyProfile";

const App = () => {
  console.log("App Page");

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Body />}>
              {readerRoutes.map((route, i) => (
                <Route key={i} {...route}>
                  {route.children?.map((child, j) => (
                    <Route key={j} {...child} />
                  ))}
                </Route>
              ))}

              {writerRoutes.map((route, i) => (
                <Route key={i} {...route} />
              ))}

              <Route path="/login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path='myprofile' element={<MyProfile />}/>
              <Route path="edit-profile" element={<EditProfile />} />

              <Route path="*" element={<h1>There is No Route</h1>} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
