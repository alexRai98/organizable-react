import { apiUrl } from "../utils";

const getBoards = async (user) => {
    try {
    const response = await fetch(`${apiUrl}/boards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token token=${user.token}`,
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

const createBoard = async (boardData,user) => {
    try {
      const response = await fetch(`${apiUrl}/boards`, {
        method: "POST",
        body: JSON.stringify(boardData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token token=${user.token}`,
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
  
//   const updateUser = async (user, newData) => {
//     try {
//       const response = await fetch(`${apiUrl}/users/${user.id}`, {
//         method: "PATCH",
//         body: JSON.stringify({ user: objectToSnake(newData) }),
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Token token="${user.token}"`,
//         },
//       });
//       const data = await response.json();
  
//       if (response.ok) {
//         return { data };
//       } else {
//         return { error: data.errors.message };
//       }
//     } catch (error) {
//       return { error: "Network error" };
//     }
//   };
  
  const deleteBoard = async (board,user) => {
    try {
      const response = await fetch(`${apiUrl}/boards/${board.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
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
  



export { getBoards,createBoard,deleteBoard};
