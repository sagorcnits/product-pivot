import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user, dataLoad } = useContext(AuthContext);
  if (dataLoad) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin"></div>
    );
  }

  if (user) {
    return children;
  }

  return navigate("/login");
};

export default PrivateRoute;
