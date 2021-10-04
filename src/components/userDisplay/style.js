import styled from "styled-components";
export const Container = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(56, 165, 255, 100);
width: 100%;
height: 100vh;
align-items: center;
justify-content: center;
p{
    text-align: justify;
    color: white;
    background: rgba(222, 202, 232, 0.5);
    text-transform:capitalize;
    font-variant:small-caps;
    width: 240px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

`
export const Content = styled.div`
display: flex;

flex-direction: column;
background: rgba(202, 218, 232, 0.3);
width: 40%;
height: 90vh;
align-items: center;
justify-content: center;
border-radius: 20px;
input{
    width: 50%;
    border: none;
    height: 3vh;
    border-radius: 5px
}
button{
    width: 40%;
    font-size: 10px;
    border-radius: 5px;
    margin: 10px;
    background-color: blue;
    height: 4vh;
    color: white;
    font-weight: bold;
    border: none;
    :hover{
        background-color: white;
        color: blue;
        transition: 0.5s
    }
    }
`