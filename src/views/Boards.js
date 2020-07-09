import React, { useState, useEffect } from "react";
import { SecctionBoards, ContainerBoards } from "../components/StyledBoards";
import { BoardButton } from "../components/StyledComponents";
import BoardCreated from "../components/BoardCreated";
import BoradList from "../components/BoardList";
import { getBoards, createBoard,deleteBoard } from "../services/boards";

function ViewBoards() {
  const [input, setInput] = useState("");
  const [boards, setBoards] = useState([]);

  const getData = async () => {
    const { data, error } = await getBoards();
    if (data) {
      setBoards(data);
    } else {
      console.log(error);
    }
  };
  useEffect(() => getData(), []);

  const hundleInput = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await createBoard({ name: input });
    if (data) {
      setInput("");
      setBoards([...boards, data]);
    } else {
      console.log(error);
    }
  };

  const hundleDelete= async(board)=>{
    const { data, error } = await deleteBoard(board);
    if (data) {
        getData()
    } else {
      console.log(error);
    }
  }

  return (
    <SecctionBoards>
      <form onSubmit={handleSubmit}>
        <BoardCreated onChange={hundleInput} value={input} />
        <BoardButton>Created Board</BoardButton>
      </form>
      <ContainerBoards>
        {boards.length === 0 ? (
          <p>No Boards</p>
        ) : (
          boards.map((board) => <BoradList title={board.name} key={board.id} detelteClick={()=>hundleDelete(board)} />)
        )}
      </ContainerBoards>
    </SecctionBoards>
  );
}

export default ViewBoards;
