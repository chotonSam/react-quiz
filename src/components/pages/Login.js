import logImg from "../../assets/images/login.svg";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration signImg={logImg} alt="Login" />
        <Form className={`${classes.login}`}>

          <TextInput
            type="text"
            placeholder="Enter email"
            name="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" name="lock" />

          <Button>Submit now</Button>

          <div class="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
