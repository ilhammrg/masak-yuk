import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Hero = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headingWrapper}>
          <Text style={styles.headingText}>Masak Yuk!</Text>
          <Text style={styles.subheadingText}>
            Temukan resep masakan{' '}
            <Text style={styles.strongHeadingText}>favoritmu</Text> disni!
          </Text>
        </View>
        <Button style={styles.button}>
          <Icon name="chef-hat" style={styles.btnIcon} />
          <Text style={styles.btnText}>Resep</Text>
        </Button>
      </View>
      <Image
        source={require('../../assets/vectors/food.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingWrapper: {
    marginBottom: 12,
  },
  headingText: {
    fontWeight: '700',
    fontSize: 26,
  },
  subheadingText: {
    fontWeight: '400',
    fontSize: 16,
  },
  strongHeadingText: {
    fontWeight: '700',
    color: '#fbc531',
  },
  button: {
    backgroundColor: '#fbc531',
    borderRadius: 7.5,
    paddingHorizontal: 12,
  },
  btnIcon: {
    color: '#ffffff',
    marginRight: 5,
    fontSize: 16,
  },
  btnText: {
    fontWeight: '700',
    fontSize: 18,
    color: '#ffffff',
  },
  image: {
    height: 100,
    width: 150,
  },
});

export default Hero;
