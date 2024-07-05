import { Suspense } from "react";
import "./App.css";
import { Loader } from "./components/Loader/Loader";
import { Navigate, Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useSelector } from "react-redux";

function App() {
  const loading = useSelector((state) => state.loading.loading);

  return (
    <>
      {loading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/recommended"
              element={<PrivateRoute>{/* <RecommendedPage /> */}</PrivateRoute>}
            />
            <Route
              path="/library"
              element={<PrivateRoute>{/* <MyLibraryPage /> */}</PrivateRoute>}
            />
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
            <Route path="*" element={<Navigate to="/recommended" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
