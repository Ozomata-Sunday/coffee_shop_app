import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PaymentScreen from './src/screens/PaymentScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import TabNavigator from './src/navigators/TabNavigator';

const Stact = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stact.Navigator screenOptions={{headerShown: false}}>
      <Stact.Screen
          name="TabNav"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stact.Screen
          name="Detail"
          component={DetailsScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stact.Screen
          name="Payment"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stact.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
