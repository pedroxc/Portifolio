import styled from "styled-components";

export const Container = styled.div`
width: 372px;
height: 432px;
max-height:80vh;
box-sizing: border-box;
background:#2f2f4d;
border-radius: 25px;
margin: 16px;
`;
export const Title = styled.div`
display:flex;
justify-content: space-around;
color:#0a0310;
`;

export const Table= styled.ul`
display:flex;
flex-direction:column;
justify-content: space-evenly;
height:80%;
margin:6px;

`

export const Lines = styled.li`
list-style-type: none;
background-color:#e8d18e;
width:80%;
border-radius:10px;
color:#0a0310;
font-size:26px;
height:48px;
display:flex;
align-items: center;
justify-content: space-around;
img{
  max-height:48px;
}
`;

