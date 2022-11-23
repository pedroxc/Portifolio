import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: fit-content;
  margin: 25px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 3px 0 10px 0 #fff;

  label {
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    margin: 2px;
  }
  iframe {
    height: 100%;
    width: 100%;
    scale: 1;
    overflow: hidden;
  }
  span {
    font-size: 18px;
    text-align: center;
    margin: 2px;
  }
`;
export const Button = styled.button`
  margin: auto;
  width: 120px;
  height: 32px;
  font-size: 18px;
  border-radius: 10px;
  margin: 12px auto;
  background-color: #374254;
  border-radius: 10px;
  color: #fffaeb;
  font-size: 24px;
`;
