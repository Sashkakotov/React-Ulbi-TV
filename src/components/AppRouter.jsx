import React, { useContext } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import { Navigate } from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";
import { privateRoutes, publicRoutes, routes } from "../router/index";
import { AuthContext } from "../context/index";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={<route.element />}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}

      <Route path="/*" element={<Navigate to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          element={<route.element />}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
