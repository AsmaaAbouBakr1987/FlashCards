import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'
import { purple, white } from './utils/color'


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="DeckList" component={DeckList} />
            <Tab.Screen name="AddDeck" component={AddDeck} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}


