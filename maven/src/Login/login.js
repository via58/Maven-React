import Button from "react-bootstrap/Button";
import { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import "./login.css";
import axios from "axios";
import config from "../config.json";
import {useHistory} from "react-router-dom";
export const Login = () => {
  let history = useHistory();
  const [userInformation, setUserInformation] = useState({
    username: "",
    password: "",
  });

  const OnInputChange = (e) => {
    switch (e.target.name) {
      case "username":
        setUserInformation({ ...userInformation, username: e.target.value });
        break;
      case "password":
        setUserInformation({ ...userInformation, password: e.target.value });
        break;
      default:
        break;
    }
  };
  
  const HandleSubmit=()=>{
  console.log(userInformation)
  const headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
};
    axios.post(config.LOGIN_URL,userInformation,headers).then(res=>{
      console.log("res",res);
      history.push("/dashboard");
    })
    .catch(err=>{
      // Router.
      alert("Error login");
      console.error(err)})
}
  return (
    <Fragment>
      <div className="login-container">
        <div className="right-login-pane">
          <Form>
            <h1 className="login-title">MAVEN</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="email"
                name="username"
                onChange={(e) => OnInputChange(e)}
                placeholder="Enter User name "
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={(e) => OnInputChange(e)}
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={HandleSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};
