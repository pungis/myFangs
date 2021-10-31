import React from 'react';
import logo from '../../assets/icons/myFangsIcon.svg';
import {
  StyledWelcomeScreen,
  StyledWelcomeScreenHeader,
  StyledWelcomeScreenLogo,
  StyledLink,
} from './WelcomeScreenStyled';

function handleDetection(event: any) {
  console.log('change');
  console.log(event.target);
}

const WelcomeScreen = (props: any) => {
  return (
    <StyledWelcomeScreen>
      <StyledWelcomeScreenHeader>
        <StyledWelcomeScreenLogo src={logo} alt='logo' />
        <h1>My Fangs</h1>
        <p>tarantulas dairy</p>
        <StyledLink to='/dashboard'>Dashboard</StyledLink>
      </StyledWelcomeScreenHeader>
    </StyledWelcomeScreen>
  );
};

export default WelcomeScreen;
