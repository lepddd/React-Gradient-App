import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import NewBtn from "../NewBtn/NewBtn";

const StyledHeader = styled.header`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled.p`
  font-family: "Bauhaus";
  font-weight: 400;
  font-size: 32px;
  color: #171717;
`;

export default function Header() {
  return (
    <StyledHeader>
      <LogoBox href="/">
        <img src={logo} alt="logo" />
        <Logo>Gradient</Logo>
      </LogoBox>
      <NewBtn />
    </StyledHeader>
  );
}
