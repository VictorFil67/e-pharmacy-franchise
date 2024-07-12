import { Navigate } from "react-router-dom";
import { selectUser } from "../store/auth/selectors";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectUser);
  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
