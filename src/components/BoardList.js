import React from 'react';
import {BoardList,IconX,TiltleBoard} from './StyledBoards';
import iconX from '../images/iconXlist.png'

function Board({title,detelteClick}){

    return(
        <BoardList>
            <TiltleBoard>{title}</TiltleBoard>
            <IconX alt="icon X" src={iconX} onClick={detelteClick}/>
        </BoardList>
    )
}

export default Board;