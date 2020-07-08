import { apiUrl, objectToSnake } from "../utils";

const createUser = async (userData) => {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: "post",
      body: JSON.stringify({ user: objectToSnake(userData) }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (response.ok) {
      return { response, data };
    } else {
      return { error: data.errors.message };
    }
  } catch (error) {
    console.log(error);
    return { error: "Network error" };
  }
};

const updateUser = async (user, newData) => {
  try {
    const response = await fetch(`${apiUrl}/users/${user.id}`, {
      method: "patch",
      body: JSON.stringify({ user: objectToSnake(newData) }),
      headers: {
        "content-type": "application/json",
        Authorization: `Token token="${user.token}"`,
      },
    });
    const data = await response.json();

    if (response.ok) {
      return { data };
    } else {
      return { error: data.errors.message };
    }
  } catch (error) {
    return { error: "Network error" };
  }
};

const deleteUser = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/users/${user.id}`, {
      method: "delete",
      headers: {
        "content-type": "application/json",
        Authorization: `Token token="${user.token}"`,
      },
    });
    if (response.ok) {
      return { data: true };
    } else {
      const data = await response.json();
      return { error: data.errors.message };
    }
  } catch (error) {
    console.log(error);
    return { error: "Network error" };
  }
};

export { createUser, updateUser, deleteUser };