import React from "react";
import icon from "../../Assets/Images/icon.png";
import { useNavigate } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

import { Container, Icon, Button } from "./styles";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <BrowserView>
        <Container>
          <Icon alt="icon" src={icon} />
          <Button
            onClick={() => {
              navigate("/Certificados");
            }}
          >
            Entre em Contato
          </Button>
        </Container>
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
    </>
  );
}

export default Header;
