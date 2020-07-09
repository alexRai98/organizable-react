import styled from "@emotion/styled";

const SecctionBoards = styled.section`
    display:flex;
    flex-direction:column;
    padding-top:40px;
`
const ContainerBoards = styled.div`
    display:grid;
    grid-template-columns: repeat(3,minmax(auto,190px));
    gap: 15px;
`
const Board = styled.div`
    border-radius: 3px;
    position:relative;
    padding: 6px 8px;
`
const BoardCreate = styled(Board)`
    max-width:190px;
    min-height: 70px;
    background: #0079BF;
`
const BoardList = styled(Board)`
    background: #4BBF6B;
    min-height: 90px;
`
const InputBoard = styled.input`
    max-width: 154px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 3px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.75);
    border:none;
    &::placeholder{
        color: #ffffff;
        font-weight: bold;
    }
`
const TiltleBoard = styled.p`
    color:#ffffff;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    margin:0px;
`
const IconX = styled.img`
    position: absolute;
    top:10px;
    right:8px;
`

export {SecctionBoards,ContainerBoards,BoardCreate,BoardList,InputBoard,TiltleBoard, IconX}