import styled from "styled-components";

export const Container = styled.div`
  background-color: #fffaeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    min-width: 100vw;
  }
`;
export const Icon = styled.img`
  height: 72px;
  width: 72px;
  border-radius: 16px;
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

export const ButtonMobile = styled.button`
  width: 30vw;
  height: 7vh;
  background: #0a0310;
  border-radius: 8px;
  color: #e8d18e;
  font-size: 4vw;
`;
