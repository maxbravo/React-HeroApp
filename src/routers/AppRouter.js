import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginPage } from "../components/login/LoginPage";
import { DashboardRouter } from "./DashboardRouter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/*" element={<DashboardRouter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
