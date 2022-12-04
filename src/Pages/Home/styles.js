import styled from "styled-components";

export const Title = styled.div`
  margin: 48px;
  justify-content: space-around;
  display: flex;
  color: #ffff;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
export const NaviBar = styled.div`
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  width: 100%;
  @media (max-width: 1000px) {
    min-width: 100vw;
    height: fit-content;
    flex-wrap: wrap;
  }
`;
export const Nav = styled.button`
  border: none;
  background: none;
  font-size: 2rem;
  margin: 5px;
  color: #374254;
  @media (max-width: 1000px) {
    border-bottom: 1px solid black;
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  font-size: 24px;
  background-color: #ffff;
  max-height: 48px;
`;
export const ButtonWarper = styled.div`
  justify-content: space-around;
  display: flex;
  margin-bottom: 48px;
`;

export const Works = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 35px;
  background-color: #fffaeb;
  box-shadow: 3px 0 10px 0 #fff;
  margin: 15px;
  margin-top: 50px;
`;

export const WorkTitle = styled.div`
  display: flex;
  justify-content: space-around;
  color: #000;
  padding-top: 16px;
`;

export const WorkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const CertificadosButton = styled.a`
  border-radius: 10px;
  font-size: 24px;
  background-color: #ffff;
  max-height: 48px;
  color: #000;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonWarpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px;
`;
