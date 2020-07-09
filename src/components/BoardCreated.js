import React from 'react';
import {BoardCreate,InputBoard,IconX} from './StyledBoards'
import iconX from '../images/iconXcreate.png'

function Board({onChange, value}){

    return(
        <BoardCreate>
            <InputBoard type="text" name="title" placeholder="Board title" onChange={onChange} value={value} required/>
            <IconX alt="icon X" src={iconX} />
        </BoardCreate>
    )
}

export default Board;