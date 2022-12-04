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
  box-shadow: 3px 0 10px 0 #fff;
  img {
    height: 64px;
  }
  @media (max-width: 1000px) {
    max-width: 85vw;
    height: fit-content;
    margin: 25px auto;
    flex-direction: column;
    img {
      height: 64px;
      width: 64px;
    }
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
  @media (max-width: 1000px) {
    img {
      height: 32px;
      width: 32px;
    }
  }
`;
export const ImagemWarpper = styled.div``;
