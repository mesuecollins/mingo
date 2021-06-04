import React from 'react';
import styled from 'styled-components';
import NavbarProfile from './NavbarProfile';

const NavWrapper = styled.div`
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  background-color: #ff0054;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
`;

const Logo = styled.a`
  font-family: 'Kalam', cursive;
  font-weight: 700;
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <Logo href='#'>mingo</Logo>
        <NavbarProfile
          user='dashawn'
          image='https://images.pexels.com/photos/8066135/pexels-photo-8066135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        />
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;
