import styled from "styled-components";

export const Container = styled.div`
  max-width: 372px;
  height: 432px;
  max-height: 80vh;
  box-sizing: border-box;
  background: #2c2748;
  border-radius: 25px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;
`;
export const Title = styled.div`
  color: white;
  font-size: 22px;
  text-align: center;
`;
export const Imagem = styled.img`
  height: 280px;
  width: auto;
`;
export const Button = styled.a`
  width: 90%;
  height: 24px;
  border-radius: 24px;
  font-size: 16px;
  color: #374254;
  background-color: #fffaeb;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
`;
export const ButtonWarpper = styled.div`
  display: flex;
  justify-content: center;
`;
