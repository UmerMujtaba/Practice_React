import React from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator(); //intilizting the tab object
const App = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: 'lightblue'
          },
          headerStyle: {
            backgroundColor: 'lightblue',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            color: 'tomato'
          }
        }}>
        <Tab.Screen
          name={'Current'}
          component={CurrentWeather}
          options={
            {
              // tabBarIcon: ({focused}) => (<Feather name={'droplet'} size={25} color={focused? 'tomato : black'}/>)
            }
          }
        />
        <Tab.Screen
          name={'Upcoming'}
          component={UpcomingWeather}
          options={
            {
              // tabBarIcon: ({focused}) => (<Feather name={'clock'} size={25} color={focused? 'tomato : black'}/>)
            }
          }
        />
        <Tab.Screen
          name={'City'}
          component={City}
          options={
            {
               // tabBarIcon: ({focused}) => (<Feather name={'clock'} size={25} color={focused? 'tomato : black'}/>)
            }
          }
        />
      </Tab.Navigator>
  );
};

export default App;
