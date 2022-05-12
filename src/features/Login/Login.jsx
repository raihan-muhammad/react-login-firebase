import { useDispatch, useSelector } from "react-redux";
import {
  LoginGoogle,
  LoginEmail,
} from "./../../config/redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Login() {
  const { dataLogin } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginGoogle = async () => {
    const data = await dispatch(LoginGoogle());
    if (data) navigate("/home");
  };

  const handleLoginEmail = () => {
    dispatch(LoginEmail(email, password));
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  useEffect(() => {
    if (dataLogin?.email === "admin@admin.com") navigate("/dashboard");
    if (dataLogin?.email !== "admin@admin.com" && dataLogin !== null)
      navigate("/home");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <input
        type="email"
        placeholder="Masukan email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Masukan Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLoginEmail}>Login</button>
      <button onClick={handleLoginGoogle}>Login with Google</button>
    </>
  );
}

export default Login;
