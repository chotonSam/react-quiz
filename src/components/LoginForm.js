import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const history = useHistory();
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch (err) {
      setLoading(false);
      setError("Faield to log in");
    }
  }

  return (
    <Form style={{ height: "300px" }} onSubmit={handleSubmit}>
      <TextInput
        type="email"
        placeholder="Enter email"
        name="alternate_email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <TextInput
        type="password"
        placeholder="Enter password"
        name="lock"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Button type="button" disabled={loading}>
        <span>Submit now</span>
      </Button>
      {error && <p className="error">{error}</p>}

      <div class="info">
        Don't have an account? <Link to="signup">Signup</Link> instead.
      </div>
    </Form>
  );
}
