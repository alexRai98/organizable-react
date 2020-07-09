import React, { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import { MainContainer } from "./components/StyledComponents";
import ViewBoards from "./views/Boards";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [user, setUser] = useState(null);
  const goBoards=()=>{
    setCurrentPage("boards")
  }

  return (
    <MainContainer>
      {user===null?null:<button onClick={goBoards}>Boards</button>}
      {currentPage === "login" ? (
        <Login setCurrentPage={setCurrentPage} setUser={setUser} />
      ) : null}
      {currentPage === "sign-up" ? (
        <SignUp setCurrentPage={setCurrentPage} setUser={setUser} />
      ) : null}
      {currentPage === "profile" ? (
        <Profile
          setCurrentPage={setCurrentPage}
          setUser={setUser}
          user={user}
        />
      ) : null}
      {currentPage === "boards" ? (
        <ViewBoards setCurrentPage={setCurrentPage} user={user} />
      ) : null}
    </MainContainer>
  );
}

export default App;
