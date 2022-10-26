import styled from "styled-components";

export const Container = styled.div`
  width: 372px;
  box-sizing: border-box;
  background:#2c2748;
  border-radius: 25px;
`;
export const Title = styled.div`
  display:flex;
  justify-content: space-around;
  color:#fff;
  margin:16px;
  font-size: 32px;
`;

export const Table= styled.ul`
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  height:80%;
  min-height:40vh;
  margin:6px;
  padding: 0;
`

export const Lines = styled.li`
  list-style-type: none;
  background-color: #7c5edd;
  border-radius:10px;
  color:#fff;
  font-size:22px;
  height:40px;
  display:flex;
  align-items: center;
  padding: 8px;
  margin: 8px;
  img{
    height:40px;
    width:40px;
    margin-right: 16px;
  }
`;

