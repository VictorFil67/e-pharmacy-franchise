import { Suspense, useEffect } from "react";
import "./App.css";
import { Loader } from "./components/Loader/Loader";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { setPath } from "./store/auth/authSlice";
import { selectExpireTime, selectUser } from "./store/auth/selectors";
import { currentThunk, refreshTokensThunk } from "./store/auth/operations";
import { toast } from "react-toastify";

function App() {
  const loading = useSelector((state) => state.loading.loading);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const expireTime = useSelector(selectExpireTime);

  useEffect(() => {
    if (pathname === "/register" || pathname === "/login") {
      return;
    }
    dispatch(setPath(pathname));
  });

  useEffect(() => {
    if (!user) {
      // if (expireTime >= Date.now()) {
      dispatch(currentThunk()).catch((error) => {
        console.error("Error fetching user data:", error);
      });
      // } else {
      //   dispatch(refreshTokensThunk())
      //     .unwrap()
      //     .then(() => {
      //       dispatch(currentThunk()).catch((error) => toast.error(error));
      //     })
      //     .catch((error) => toast.error(error));
      // }
    }
  }, [dispatch, user]);

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
                  <h2>11111</h2>
                </PrivateRoute>
              }
            />
            {/* <Route
              path="/library"
              element={<PrivateRoute> */}
            {/* <MyLibraryPage /> */}
            {/* </PrivateRoute>}
            /> */}
            <Route
              path="/reading"
              element={<PrivateRoute>{/* <ReadingPage /> */}</PrivateRoute>}
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
