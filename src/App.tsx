import React from 'react';

import BasicMapComponent from './components/BasicMapComponent';
import SideDrawer from './components/SideDrawer';
import ToggleDrawerButton from './components/ToggleDrawerButton';

import './App.less';
import MainHeader from './components/MainHeader/MainHeader';

export const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <MainHeader />
      <BasicMapComponent />
      <ToggleDrawerButton />
      <SideDrawer />
    </div>
  );
};

export default App;
