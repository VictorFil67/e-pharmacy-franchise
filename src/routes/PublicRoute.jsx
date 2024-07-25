import { useSelector } from "react-redux";
import { selectPath, selectUser } from "../store/auth/selectors";
import { Navigate } from "react-router-dom";
import { selectShop } from "../store/shops/selectors";

const PublicRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const path = useSelector(selectPath);
  const shop = useSelector(selectShop);
  if (!user) {
    return children;
  }
  console.log(user, shop);
  if (user && !shop) {
    return <Navigate to={"/create-shop"} />;
  } else if (user && shop) {
    return <Navigate to={path ?? "/"} />;
  }
};

export default PublicRoute;
