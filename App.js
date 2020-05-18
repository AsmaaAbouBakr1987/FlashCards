import React from 'react';
import { View } from 'react-native';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeckView from './components/DeckView';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz'
import {setLocalNotification} from './utils/helpers'

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
  const methods = {
    componentDidMount(){
      setLocalNotification()
    }
  };
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="AddDeck" component={AddDeck} />
            <Stack.Screen name="DeckView" component={DeckView} />
            <Stack.Screen name="AddCard" component={AddCard} />
            <Stack.Screen name="Quiz" component={Quiz} />
          </Stack.Navigator>
          </NavigationContainer>

          
      </View>
    </Provider>
  );
}


