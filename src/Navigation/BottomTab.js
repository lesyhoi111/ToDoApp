import React,{ createContext, useState,useContext,useEffect }  from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/Home';
import themeContext from '../../config/themeContext'
import StackProject from './StackProject';
import StackSetting from './StackSetting';
import StackHome from './StackHome';
import CountTime from '../Screens/CountTime';

const Tab = createBottomTabNavigator();

function UITab() {
  const theme=useContext(themeContext);
  return (
    
    <Tab.Navigator initialRouteName="Home"  screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        //tabBarLabelStyle:{fontSize:14, fontWeight:'bold'},
        tabBarActiveTintColor: 'wheat',
        tabBarStyle:{
            backgroundColor:theme.backgroundColor,
            height:45
        }
    }}>
      <Tab.Screen name="Home" component={StackHome} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={36} />
          ),
        }}/>
        <Tab.Screen name="StackProject" component={StackProject} options={{
          tabBarLabel: 'StackProject',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="laptop" color={color} size={36} />
          ),
        }}/>
      <Tab.Screen name="StackSetting" component={StackSetting}  options={{
          tabBarLabel: 'StackSetting',
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-settings-sharp" color={color} size={35} />
          ),
        }} />
        

    </Tab.Navigator>
    
  );
}
export default UITab;