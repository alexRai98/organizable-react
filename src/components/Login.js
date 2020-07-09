import React, { useState } from "react";
import { FormContainer, PrimaryButton, Link, Form } from "./StyledComponents";
import FormInput from "./FormInput";
import { loginUser } from "../services/session";

function Login({ setCurrentPage, setUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    const { data, error } = await loginUser(formData);

    if (data) {
      setUser(data);
      setCurrentPage("profile");
    } else {
      setError(error);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          name="username"
          value={formData.username}
          onChange={onChange}
        />
        <FormInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={onChange}
          type="password"
        />
        <PrimaryButton style={{ marginTop: "16px" }}>Login</PrimaryButton>
      </Form>
      {error && <p>{error}</p>}
      <Link
        style={{ marginTop: "16px" }}
        onClick={() => setCurrentPage("sign-up")}
      >
        Create an Account
      </Link>
    </FormContainer>
  );
}

export default Login;
