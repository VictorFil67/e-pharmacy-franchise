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
  return <Navigate to={!shop ? "/create-shop" : path ?? "/"} />;
};

export default PublicRoute;
