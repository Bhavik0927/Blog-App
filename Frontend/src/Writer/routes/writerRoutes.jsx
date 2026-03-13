import ProtectedRoute from "../../shared/routes/ProtectedRoutes";
import { lazy } from "react";

const AddBlogCard = lazy(() => import("../components/AddBlogCard"));
const EditBlog = lazy(() => import("../Pages/EditBlog"));
const EditProfile = lazy(() => import("../../auth/components/EditProfile"));
const Myblogs = lazy(() => import("../../Reader/components/Myblogs"));
const SaveBlogs = lazy(() => import("../../Reader/pages/SaveBlogs"));


const writerRoutes = [
  {
    path: "writer/card",
    element: (
      <ProtectedRoute role="WRITER">
        <AddBlogCard />
      </ProtectedRoute>
    ),
  },
  {
    path: "writer/editblog/:id",
    element: (
      <ProtectedRoute role="WRITER">
        <EditBlog />
      </ProtectedRoute>
    ),
  },
  {
    path: "writer/edit-profile",
    element: (
      <ProtectedRoute role="WRITER">
        <EditProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "writer/myblogs",
    element: (
      <ProtectedRoute role="WRITER">
        <Myblogs />
      </ProtectedRoute>
    ),
  },
  {
    path: "writer/saveblogs",
    element: (
      <ProtectedRoute role="WRITER">
        <SaveBlogs />
      </ProtectedRoute>
    ),
  },
];

export default writerRoutes;
