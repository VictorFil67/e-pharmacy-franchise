import { useSelector } from "react-redux";
import { selectPath, selectToken, selectUser } from "../store/auth/selectors";
import { Navigate } from "react-router-dom";
// import { selectPath } from "../store/books/selectors";

const PublicRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const path = useSelector(selectPath);
  const token = useSelector(selectToken);
  console.log(token);
  // const user = false;
  // const path = "/";
  if (!user) {
    return children;
  }
  // else if (!token) {
  //   console.log(token);
  //   <Navigate to={"/login"} />;
  //   return children;
  // }
  // else {
  // return <Navigate to={"/"} />;
  // }
  return <Navigate to={path ?? "/"} />;
};

export default PublicRoute;
