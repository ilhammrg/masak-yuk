import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RecipeItem from '../recipe-item/recipe-item';

const RecipeList = ({recipeList, title, description}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View style={styles.titleContainer}>
          <Icon style={styles.iconTitle} name="restaurant" />
          <Text style={styles.textTitle}>{title}</Text>
        </View>
        <Button style={{height: 30}} transparent>
          <Text style={styles.headingBtnText}>Lihat Semua</Text>
        </Button>
      </View>
      <Text style={{marginBottom: 10, color: '#858585'}}>{description}</Text>
      <View>
        {recipeList.map(({key, ...otherProps}) => (
          <RecipeItem key={key} {...otherProps} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  iconTitle: {
    fontSize: 16,
    marginRight: 7,
  },
  headingBtnText: {
    color: '#fbc531',
  },
});

export default RecipeList;
