import styled from "styled-components";

export const Description = styled.div`
  font-size: 24px;
  color: black;
  background-color: #f8f8f8;
  margin: 15px;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  display: flex;
  img {
    height: 64px;
  }
`;
export const Text = styled.div`
  margin: 15px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5px;
  div {
    display: flex;
    align-items: center;
    :hover {
      transform: scale(1.1);
    }
  }
  img {
    height: 32px;
    margin: 5px;
  }

  a {
    display: flex;

    color: blue;
    text-decoration: none;
  }
`;
