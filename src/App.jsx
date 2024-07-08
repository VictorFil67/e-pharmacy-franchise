import { Suspense, useEffect } from "react";
import "./App.css";
import { Loader } from "./components/Loader/Loader";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { setPath } from "./store/auth/authSlice";
import {
  selectExpireTime,
  selectPath,
  selectUser,
} from "./store/auth/selectors";
import { currentThunk, refreshTokensThunk } from "./store/auth/operations";
import { toast } from "react-toastify";
import CreateShopPage from "./pages/CreateShopPage/CreateShopPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import EditShopPage from "./pages/EditShopPage/EditShopPage";

function App() {
  const loading = useSelector((state) => state.loading.loading);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const path = useSelector(selectPath);
  const expireTime = useSelector(selectExpireTime);
  const navigate = useNavigate();

  useEffect(() => {
    // if (pathname === "/register" || pathname === "/login") {
    //   return;
    // }
    dispatch(setPath(pathname));
  });

  useEffect(() => {
    if (!user && path === "/") {
      navigate("/register");
    }
  }, [navigate, user, path]);

  useEffect(() => {
    if (!user) {
      if (expireTime >= Date.now()) {
        dispatch(currentThunk()).catch((error) => {
          console.error("Error fetching user data:", error);
        });
      } else {
        dispatch(refreshTokensThunk())
          .unwrap()
          .then(() => {
            dispatch(currentThunk()).catch((error) => toast.error(error));
          })
          .catch((error) => toast.error(error));
      }
    }
  }, [dispatch, user, expireTime]);

  return (
    <>
      {loading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/shop"
              element={
                <PrivateRoute>
                  <ShopPage />
                  {/* <h2>ShopPage</h2> */}
                </PrivateRoute>
              }
            />
            <Route
              path="/create-shop"
              element={
                <PrivateRoute>
                  <CreateShopPage />
                  {/* <h2>CreateShopPage</h2> */}
                </PrivateRoute>
              }
            />
            <Route
              path="/edit-shop"
              element={
                <PrivateRoute>
                  <EditShopPage />
                  {/* <h2>EditShopPage</h2> */}
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
