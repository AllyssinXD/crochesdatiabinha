import { useNavigate, useSearchParams } from "react-router-dom";
import "axios";
import axios from "axios";

function Authenticate() {
  const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();
  const username = searchParams.get("username");
  const password = searchParams.get("password");
  axios
    .post(import.meta.env.VITE_API_URL + "/api/auth/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      if (response.data.token) {
        //salva token
        navigate("/");
      }
    })
    .catch((err) => {
      navigate("/login?err=" + err);
      console.log(err);
    });

  return <>hey</>;
}

export default Authenticate;
