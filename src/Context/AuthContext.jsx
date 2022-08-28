import axios from "axios";
import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";
function postSignUpdata(config) {
  return axios.post(
    "https://fake-json-server-api-sahnawaz.herokuapp.com/signupdata",
    config
  );
}
function getSignedUpData() {
  return axios.get(
    "https://fake-json-server-api-sahnawaz.herokuapp.com/signupdata"
  );
}
function postFinalSigninData(config) {
  return axios.post(
    "https://fake-json-server-api-sahnawaz.herokuapp.com/signindata",
    config
  );
}
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  //  const navigate = useNavigate();
  const [validData, setValidData] = useState([]);
  const handlePostSignupData = (data) => {
    postSignUpdata(data)
      .then((res) => {
        alert("Sign Successfull");
        //navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignin = (data) => {
    getSignedUpData()
      .then((res) => {
        const successResponse = res.data.filter((el) => {
          return el.email === data.email && el.password === data.password;
        });

        if (successResponse.length === 0) {
          alert("Wrong credential");
        } else {
          const { email, password, id } = successResponse[0];
          const validData = { email, password, id };
          // console.log("validData; ", validData);
          postFinalSigninData(validData)
            .then((res) => {
              alert("sign in Success");
              setValidData(res);
            })
            .catch((err) => {
              alert("Something worng or You are already logged in");
            });
        }

        // console.log(successResponse);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  //console.log(validData);
  const value = { handlePostSignupData, handleSignin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export { AuthContext, AuthContextProvider };
