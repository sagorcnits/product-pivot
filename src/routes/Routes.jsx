import { createBrowserRouter } from "react-router-dom";
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
      },

      {
        path:"/login",
        element:<Login></Login>
      },

      {
        path:"/register",
        element:<Register></Register>
      },

      {
        path:"/queries",
        element:<Queries></Queries>
      },

      { 
        path:"/myqueries",
        element:<MyQueries></MyQueries>
      },

      { 
        path:"/addquery",
        element:<AddQuerie></AddQuerie>
      },

      { 
        path:"/querydetails",
        element:<QueryDetails></QueryDetails>
      },

      { 
        path:"/myrecommend",
        element:<MyRecommendations></MyRecommendations>
      },

      { 
        path:"/recommendation-for-me",
        element:<RecommendationForMe></RecommendationForMe>
      },
    ],
  },
]);

export default router;
