import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import SigninButton from "../components/Header/SigninButton";
import FeatureWrapper from "../components/Header/FeatureWrapper";
import FeatureTitle from "../components/Header/FeatureTitle";
import Warning from "../components/Header/Warning";
import Button from 'react-bootstrap/Button';

function HeaderCompound({ children }) {
  return (
    <HeaderWrapper className="header-wrapper-home">
      <NavBar className="navbar-home">
        <Logo />
        <SigninButton>Sign In</SigninButton>
        {/* <Button href="/signin">Sign In</Button> */}
      </NavBar>
      <FeatureWrapper className="feature-wrapper-home">
        <FeatureTitle className="feature-title-home">
          Unlimited movies, TV shows and more.
        </FeatureTitle>
        <Warning>
          Netfliz
        </Warning>
      </FeatureWrapper>
      {children}
    </HeaderWrapper>
  );
}

export default HeaderCompound;
