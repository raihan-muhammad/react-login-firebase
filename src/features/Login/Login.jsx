import { useDispatch } from "react-redux";
import { LoginGoogle } from "./../../config/redux/actions/authAction";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { dataLogin } = useSelector((store) => store.auth);
  console.log(dataLogin);
  const dataUsers = dataLogin?.user;
  console.log(dataUsers);

  const handleLogin = async () => {
    const data = await dispatch(LoginGoogle());
    if (data) navigate("home");
  };

  return (
    <>
      <button onClick={() => handleLogin()}>Login with Google</button>
      <br />
      <br />
      <br />
      <img src={dataUsers?.photoURL} alt="img-mail" />
      <p>{dataUsers?.displayName}</p>
      <p>{dataUsers?.email}</p>
    </>
  );
}

export default Login;
