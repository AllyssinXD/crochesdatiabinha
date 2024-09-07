import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function CreateUser() {
  const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();
  const username = searchParams.get("username");
  const email = searchParams.get("email");
  const password = searchParams.get("password");

  useEffect(() => {
    let isSubscribed = true;
    if (username && email && password) {
      axios
        .post(
          "https://crochesdatiabinha-backend-production.up.railway.app/api/auth/register",
          {
            username: username,
            password: password,
            email: email,
          }
        )
        .then((_) => {
          if (isSubscribed) {
            navigate("/login");
          }
        })
        .catch((err) => {
          if (isSubscribed) {
            console.log(err);
            navigate("/signup?err=" + err);
          }
        });
    }

    return () => {
      isSubscribed = false;
    };
  }, [username, email, password, navigate]);

  return <></>;
}

export default CreateUser;
