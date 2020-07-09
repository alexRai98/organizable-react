import React from 'react';
import {SecctionBoards,ContainerBoards} from '../components/StyledBoards';
import {BoardButton} from '../components/StyledComponents';
import BoardCreated from '../components/BoardCreated';
import BoradList from '../components/BoardList';


function ViewBoards(){

    return(
        <SecctionBoards>
            <BoardCreated/>
            <BoardButton>Created Board</BoardButton>
            <ContainerBoards>
                <BoradList/>
            </ContainerBoards>
            
        </SecctionBoards>
    )
}

export default ViewBoards;