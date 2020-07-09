import React from 'react';
import {BoardList,IconX,TiltleBoard} from './StyledBoards';
import iconX from '../images/iconXlist.png'

function Board(){

    return(
        <BoardList>
            <TiltleBoard>Board</TiltleBoard>
            <IconX alt="icon X" src={iconX}/>
        </BoardList>
    )
}

export default Board;