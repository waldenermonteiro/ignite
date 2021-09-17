import React from 'react';
import {StatusBar} from 'react-native';
import {Home} from './pages/Home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#121015" />
      <Home />
    </>
  );
};

export default App;
