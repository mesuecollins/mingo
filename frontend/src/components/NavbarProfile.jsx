import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfilePicture = styled.div.attrs((props) => ({
  image: props.image,
}))`
  width: 3rem;
  height: 3rem;
  display: block;
  border: 0px solid #f4f4f4;
  border-radius: 50%;
  background-color: #f4f4f4;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

const User = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: #fff;
  padding-right: 1rem;
`;

const NavbarProfile = ({ user, image }) => (
  <ProfileWrapper>
    <User>{user}</User>
    <ProfilePicture image={image} />
  </ProfileWrapper>
);

export default NavbarProfile;
