import styled from "styled-components";

export const Container = styled.div`
  background-color: #fffaeb;
  margin-top: 25px;
  margin: 25px auto;
  border-radius: 10px;
  padding: 15px;
  width: 50%;
  @media screen and (max-width: 560px) {
    width: 100%;
    font-size: 30px;
  }
  box-shadow: 3px 0 10px 0 #fff;

  img {
    height: 32px;
    margin: 5px;
  }
`;
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 5px;
  div {
    display: flex;
    align-items: center;
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

export const Button = styled.button`
  width: auto;
  height: auto;
  padding: 6px;
  background-color: #374254;
  border-radius: 10px;
  color: #fffaeb;
  font-size: 24px;
`;
