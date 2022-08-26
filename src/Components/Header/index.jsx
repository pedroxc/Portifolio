import React from "react";
import icon from "../../Assets/Images/icon.png";
import { useNavigate } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

import { Container, Icon, Button, ButtonMobile } from "./styles";

function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <Icon alt="icon" src={icon} />
      <BrowserView>
        <Button
          onClick={() => {
            navigate("/Certificados");
          }}
        >
          Entre em Contato
        </Button>
      </BrowserView>
      <MobileView>
        <ButtonMobile
          onClick={() => {
            navigate("/Certificados");
          }}
        >
          Entre em Contato
        </ButtonMobile>
      </MobileView>
    </Container>
  );
}

export default Header;
