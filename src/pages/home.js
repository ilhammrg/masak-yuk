import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {StyleSheet, ScrollView} from 'react-native';
import {Content} from 'native-base';
import Hero from '../components/hero/hero';
import RecipeList from '../components/recipe-list/recipe-list';

const Home = () => {
  const [newestRecipeList, setNewestRecipeList] = useState([]);

  async function getNewestRecipeList() {
    axios
      .get('https://masak-apa.tomorisakura.vercel.app/api/recipes')
      .then((response) => {
        setNewestRecipeList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getNewestRecipeList();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Content>
        <Hero />
        <RecipeList
          recipeList={newestRecipeList}
          title="Terbaru"
          description="Daftar resep terbaru"
        />
      </Content>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#f5f5f5',
  },
});

export default Home;
