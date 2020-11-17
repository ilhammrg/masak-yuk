import React from 'react';
import {Image, Text, StyleSheet, Dimensions, View} from 'react-native';
import {Card, CardItem, Body, Left, Right, Button} from 'native-base';
import ClockIcon from 'react-native-vector-icons/Ionicons';
import ServingIcon from 'react-native-vector-icons/MaterialIcons';
import ChefIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const RecipeItem = ({title, thumb, times, portion, dificulty}) => {
  return (
    <Card style={styles.container}>
      <CardItem style={styles.cardImageContainer} cardBody>
        <Image
          style={styles.cardImage}
          source={{
            uri: thumb,
          }}
        />
      </CardItem>
      <CardItem style={styles.titleContainer}>
        <Body>
          <Text style={styles.cardTitleText}>{title}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <View style={styles.headingLabelContainer}>
            <ClockIcon style={styles.headingLabelIcon} name="alarm" />
            <Text style={styles.headingLabelText}>{times}</Text>
          </View>
          <View style={styles.headingLabelContainer}>
            <ServingIcon style={styles.headingLabelIcon} name="room-service" />
            <Text style={styles.headingLabelText}>{portion}</Text>
          </View>
          <View style={styles.headingLabelContainer}>
            <ChefIcon style={styles.headingLabelIcon} name="chef-hat" />
            <Text style={styles.headingLabelText}>{dificulty}</Text>
          </View>
        </Left>
        <Right>
          <Button style={{height: 30}} transparent>
            <Text style={styles.headingLabelText}>Lihat Resep</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 7.5,
    overflow: 'hidden',
  },
  cardImageContainer: {
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
  },
  cardImage: {
    height: 240,
    width: Dimensions.get('window').width,
  },
  titleContainer: {
    backgroundColor: '#fff5db',
  },
  cardTitleText: {
    fontSize: 18,
    fontWeight: '700',
  },
  headingLabelContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  headingLabelIcon: {
    color: '#fbc531',
    fontSize: 16,
    marginRight: 3,
  },
  headingLabelText: {
    color: '#fbc531',
  },
});

export default RecipeItem;
