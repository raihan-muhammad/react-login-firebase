import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { dataLogin } = useSelector((state) => state.auth);

  useEffect(() => {
    if (dataLogin?.email !== "admin@admin.com") navigate("/");

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Halaman Dashboard</h1>
    </>
  );
};

export default Dashboard;
