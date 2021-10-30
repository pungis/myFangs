import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const StyledWelcomeScreen = styled.div`
  text-align: center;
`;
export const StyledWelcomeScreenHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
export const StyledWelcomeScreenLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  fill: #fff;
  animation: ${rotate} infinite 20s linear;
`;

export const StyledHeader = styled.h1``;
export const StyledParagraph = styled.p``;
export const StyledLink = styled(Link)`
  color: #61dafb;
`;