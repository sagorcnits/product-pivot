import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Root from "../layout/Root";
import AddQuerie from "../pages/addQuerie/AddQuerie";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyQueries from "../pages/myQueries/MyQueries";
import MyRecommendations from "../pages/myRecommendations/MyRecommendations";
import NotFound from "../pages/notFound/NotFound";
import Queries from "../pages/queries/Queries";
import QueryDetails from "../pages/queryDetails/QueryDetails";
import RecommendationForMe from "../pages/recommendtionForMe/RecommendationForMe";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/addquery"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/queries",
        element: <Queries></Queries>,
        loader: () => fetch("http://localhost:5000/addquery"),
      },

      {
        path: "/myqueries",
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
      },

      {
        path: "/addquery",
        element: (
          <PrivateRoute>
            <AddQuerie></AddQuerie>
          </PrivateRoute>
        ),
      },

      {
        path: "/querydetails/:id",
        element: (
          <PrivateRoute>
            <QueryDetails></QueryDetails>
          </PrivateRoute>
        ),
      },

      {
        path: "/myrecommend",
        element: (
          <PrivateRoute>
            <MyRecommendations></MyRecommendations>
          </PrivateRoute>
        ),
      },

      {
        path: "/recommendation-for-me",
        element: (
          <PrivateRoute>
            <RecommendationForMe></RecommendationForMe>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
