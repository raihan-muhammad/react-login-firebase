import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const data = useSelector((globalStore) => globalStore);
  const navigate = useNavigate();

  const CheckLogin = () => {
    if (
      data.auth.dataLogin === null ||
      data.auth.dataLogin?.email === "admin@admin.com"
    )
      navigate("/");
  };

  useEffect(() => {
    CheckLogin();
    // eslint-disable-next-line
  }, []);

  return <h1>This is landingpage!</h1>;
};

export default Home;
