import styled from "styled-components";

export const Container = styled.div`
width: 372px;
height: 432px;
max-height:80vh;
box-sizing: border-box;
background:#543DE4;
border-radius: 25px;
margin: 16px;
`;
export const Title = styled.div`
display:flex;
justify-content: space-around;
color:#0a0310;
margin:16px;
font-size: 32px;
`;

export const Table= styled.ul`
display:flex;
flex-direction:column;
justify-content: space-evenly;
height:80%;
min-height:40vh;
margin:6px;
padding: 0;
`

export const Lines = styled.li`
list-style-type: none;
background-color:#ffff;
min-width:80%;
border-radius:10px;
color:#0a0310;
font-size:26px;
height:48px;
display:flex;
align-items: center;
justify-content: space-evenly;
img{
  max-height:48px;
}
`;

