import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Title, Left, Right, Button, Icon} from 'native-base';

const Navbar = () => {
  return (
    <Header style={styles.header} androidStatusBarColor="#000000" noShadow>
      <Left style={styles.leftContainer}>
        <Icon style={styles.homeIcon} name="home" />
        <Title>Beranda</Title>
      </Left>
      <Right>
        <Button transparent>
          <Icon name="settings-outline" />
        </Button>
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fbc531',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeIcon: {
    fontSize: 18,
    marginRight: 10,
    color: '#ffffff',
  },
});

export default Navbar;
