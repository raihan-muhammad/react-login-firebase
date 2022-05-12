import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/Login/Login";
import Home from "./features/Home/Home";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;
