import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const data = useSelector((globalStore) => globalStore);
  const navigate = useNavigate();
  console.log(data);

  const CheckLogin = () => {
    if (data.auth.dataLogin === null) navigate("/");
  };

  useEffect(() => {
    CheckLogin();
  }, []);

  return <h1>Welcome!</h1>;
};

export default Home;
