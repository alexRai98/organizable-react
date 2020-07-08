import React, { useState } from "react";
import {
  FormContainer,
  PrimaryButton,
  Button,
  WarningButton,
  Form,
  Link,
} from "./StyledComponents";
import FormInput from "./FormInput";
import { updateUser, deleteUser } from "../services/users";
import { logoutUser } from "../services/session";

function Profile({ setCurrentPage, user, setUser }) {
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  });
  const [error, setError] = useState(null);
  const [edit, setEdit] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDelete = async () => {
    const { data, error } = await deleteUser(user);
    if (data) {
      setCurrentPage("login");
      setUser(null);
    } else {
      setError(error);
      console.log(error);
    }
  };

  const handleLogout = async () => {
    const { data, error } = await logoutUser(user);
    if (data) {
      setCurrentPage("login");
      setUser(null);
    } else {
      setError(error);
      console.log(error);
    }
  };

  const handleEdit = async () => {
    const { data, error } = await updateUser(user, formData);

    if (data) {
      setUser(data);
      setEdit(false);
    } else {
      setError(error);
    }
  };

  const handleSubmit = async (event, action) => {
    event.preventDefault();
    setError(null);
    switch (action) {
      case "delete":
        await handleDelete();
        break;
      case "edit":
        await handleEdit();
        break;
      default:
        break;
    }
  };

  return (
    <FormContainer>
      <Form>
        <FormInput
          label="Username"
          name="username"
          value={formData.username}
          onChange={onChange}
          disabled={!edit}
        />
        <FormInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={onChange}
          type="email"
          disabled={!edit}
        />
        <FormInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
          disabled={!edit}
        />
        <FormInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
          disabled={!edit}
        />
        <div
          style={{
            marginTop: "16px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {edit ? (
            <PrimaryButton onClick={(e) => handleSubmit(e, "edit")}>
              Save
            </PrimaryButton>
          ) : (
            <Button
              onClick={(e) => {
                e.preventDefault();
                setEdit(true);
              }}
            >
              Edit
            </Button>
          )}

          {edit ? (
            <WarningButton
              onClick={(e) => {
                e.preventDefault();
                setEdit(false);
              }}
            >
              Cancel
            </WarningButton>
          ) : (
            <WarningButton onClick={(e) => handleSubmit(e, "delete")}>
              Delete
            </WarningButton>
          )}
        </div>
      </Form>
      {error && <p>{error}</p>}
      <Link style={{ marginTop: "16px" }} onClick={handleLogout}>
        Logout
      </Link>
    </FormContainer>
  );
}

export default Profile;
