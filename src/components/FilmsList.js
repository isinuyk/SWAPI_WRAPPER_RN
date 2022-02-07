import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import Swapi from '../swapi/swapi';

const FilmsList = () => {
  const [films, setFilms] = useState([]);
  const getFilms = async () => {
    try {
      const res = await Swapi.getFilms();
      setFilms(Object.keys(res));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);
  return (
    <FlatList
      keyExtractor={item => item}
      data={films}
      renderItem={({item}) => {
        return (
          <View style={styles.container}>
            <Text style={styles.item}>{item}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
  },
  item: {
    fontSize: 30,
    fontFamily: 'Open-Sans',
  },
});

export default FilmsList;
