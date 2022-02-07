/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import PeopleList from './src/components/PeopleList';
import PlanetsList from './src/components/PlanetsList';
import ResourceList from './src/components/ResourceList';
import ShipsList from './src/components/ShipsList';
import SpeciesList from './src/components/SpeciesList';
import VehicleList from './src/components/VehicleList';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <PeopleList />
        <VehicleList />
        <ResourceList />
        <ShipsList />
        <SpeciesList />
        <PlanetsList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
