import signImg from "../../assets/images/signup.svg";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration signImg={signImg} alt="Signup"/>
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter name" name="person" />

          <TextInput
            type="text"
            placeholder="Enter email"
            name="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" name="lock" />

          <TextInput
            type="password"
            placeholder="Confirm password"
            name="lock_clock"
          />

          <Checkbox type="checkbox">Agree to the Terms &amp; Conditions</Checkbox>

          <Button>Submit now</Button>

          <div class="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
