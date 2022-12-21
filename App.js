import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackScreen from './components/navigators/HomeStackScreen';
import IndexStackScreen from './components/navigators/IndexStackScreen';
import TestStackScreen from './components/navigators/TestStackScreen';
import ShopStackScreen from './components/navigators/ShopStackScreen';
import ProfileStackScreen from './components/navigators/ProfileStackScreen';
import { ThemeProvider, createTheme } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
        <Tab.Screen
          name="tabHome"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: 'home',
            tabBarColor: '#C9E7F8',
          }}
        />
        <Tab.Screen 
          name="tabIndex" 
          component={IndexStackScreen} 
          options={{
            tabBarLabel: 'Index',
            tabBarIcon: 'bookshelf',
            tabBarColor: '#C9E7F8',
          }}
        />
        <Tab.Screen 
          name="tabTest" 
          component={TestStackScreen} 
          options={{
            tabBarLabel: 'Test',
            tabBarIcon: 'brain',
            tabBarColor: '#C9E7F8',
          }}
        />
        <Tab.Screen 
          name="tabShop" 
          component={ShopStackScreen} 
          options={{
            tabBarLabel: 'Shop',
            tabBarIcon: 'store',
            tabBarColor: '#C9E7F8',
          }}
        />
        <Tab.Screen 
          name="tabProfile" 
          component={ProfileStackScreen} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: 'account',
            tabBarColor: '#C9E7F8',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;