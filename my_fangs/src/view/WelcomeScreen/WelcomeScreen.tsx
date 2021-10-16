import React from "react";
import logo from "../../assets/icons/myFangsIcon.svg";
import styled, {keyframes} from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const StyledWelcomeScreen = styled.div`
  text-align: center;
`;
const StyledWelcomeScreenHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const StyledWelcomeScreenLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  fill: #fff;
  animation: ${rotate} infinite 20s linear;
`;

const StyledHeader = styled.h1``;
const StyledParagraph = styled.p``;
const StyledLink = styled.a`
  color: #61dafb;
`;

const WelcomeScreen = (props: any) => {
  return (
    <StyledWelcomeScreen>
      <StyledWelcomeScreenHeader>
        <StyledWelcomeScreenLogo src={logo} alt="logo" />
        <h1>My Fangs</h1>
        <p>tarantulas dairy</p>
        <StyledLink href="#" target="_blank" rel="noopener noreferrer">
          Dashboard
        </StyledLink>
      </StyledWelcomeScreenHeader>
    </StyledWelcomeScreen>
  );
};

export default WelcomeScreen;
