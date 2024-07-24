import { useSelector } from "react-redux";
import { selectPath, selectUser } from "../store/auth/selectors";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const path = useSelector(selectPath);

  if (!user) {
    return children;
  }
  return <Navigate to={path ?? "/"} />;
};

export default PublicRoute;
