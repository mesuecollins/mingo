import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Wrapper = styled.div`
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
    </Wrapper>
  );
};

export default Layout;
