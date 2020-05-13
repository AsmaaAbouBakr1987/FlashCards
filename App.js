import React from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
//import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { purple, white,green } from './utils/color'
import DeckView from './components/DeckView';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'DeckList') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
                
              } else if (route.name === 'AddDeck') {
                  iconName = focused
                  ? 'ios-add-circle'
                  : 'ios-add-circle-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'purple',
            inactiveTintColor: 'gray',
          }}>
            <Tab.Screen name="DeckList" component={DeckList} />
            <Tab.Screen name="AddDeck" component={AddDeck} />
          </Tab.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="DeckList" component={Home} />
            <Stack.Screen name="AddDeck" component={AddDeck} />
            <Stack.Screen name="DeckView" component={DeckView} />
          </Stack.Navigator>
          </NavigationContainer>

          
      </View>
    </Provider>
  );
}


