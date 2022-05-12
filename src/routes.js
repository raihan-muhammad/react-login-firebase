import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/Login/Login";
import Home from "./features/Home/Home";
import Dashboard from "./features/Dashboard/Dashboard";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;
