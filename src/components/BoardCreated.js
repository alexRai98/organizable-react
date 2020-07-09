import React from 'react';
import {BoardCreate,InputBoard,IconX} from './StyledBoards'
import iconX from '../images/iconXcreate.png'

function Board(){

    return(
        <BoardCreate>
            <InputBoard type="text" name="title" placeholder="Board title"/>
            <IconX alt="icon X" src={iconX} />
        </BoardCreate>
    )
}

export default Board;