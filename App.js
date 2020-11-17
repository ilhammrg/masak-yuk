/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {Container} from 'native-base';
import Navbar from './src/components/header/header';
import Home from './src/pages/home';

const App = () => {
  return (
    <Container style={styles.container}>
      <Navbar />
      <Home />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbc531',
  },
});

export default App;
