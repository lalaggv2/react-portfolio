import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import MobileNav from '../MobileNav';

import { StyledContent } from './styles';

const Layout = ({ user, children }) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <Header user={user} />
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;