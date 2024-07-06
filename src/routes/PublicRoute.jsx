import { useSelector } from "react-redux";
import { selectPath, selectToken, selectUser } from "../store/auth/selectors";
import { Navigate } from "react-router-dom";
// import { selectPath } from "../store/books/selectors";

const PublicRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const path = useSelector(selectPath);
  const token = useSelector(selectToken);
  // const user = false;
  // const path = "/";
  if (!user) {
    return children;
  } else if (!token) {
    return <Navigate to={"/login"} />;
  }
  return <Navigate to={path ?? "/login"} />;
};

export default PublicRoute;
