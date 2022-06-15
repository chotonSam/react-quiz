import signImg from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration signImg={signImg} alt="Signup" />
        <SignupForm />
      </div>
    </>
  );
}