import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginPage } from "../components/login/LoginPage";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
        <Route path="/login" element={
            <PublicRoute >
              <LoginPage />
            </PublicRoute>
          }
          />
          <Route path="/*" element={
            <PrivateRoute >
              <DashboardRouter />
            </PrivateRoute>
          }
          />
          {/*<Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<DashboardRouter />} />*/} 
        </Routes>
      </div>
    </BrowserRouter>
  );
};
