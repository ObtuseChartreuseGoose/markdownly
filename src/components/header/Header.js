import React from 'react';
import TabsContainer from '../../containers/tab/TabsContainer';
import AddTabButtonContainer from '../../containers/addTabButton/AddTabButtonContainer';

function Header() {
  return (
    <>
      <TabsContainer />
      <AddTabButtonContainer />
    </>
  );
}

export default Header;
