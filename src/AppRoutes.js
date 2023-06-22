import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import PageSix from "./pages/PageSix";
import People from "./pages/peoples/Peoples";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/page-two" element={<PageTwo />} />
      <Route path="/page-three" element={<PageThree />} />
      <Route path="/page-four" element={<PageFour />} />
      <Route path="/" element={<People />} />
      <Route path="/page-six" element={<PageSix />} />
    </Routes>
  );
};

export default AppRoutes;
