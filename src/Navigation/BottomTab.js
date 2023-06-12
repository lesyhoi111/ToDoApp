import React,{ createContext, useState,useContext,useEffect }  from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from '../Screens/Home';
import Setting from '../Screens/Setting';

const Tab = createBottomTabNavigator();

function UITab() {
  
  return (
    
    <Tab.Navigator initialRouteName="Home"  screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        //tabBarLabelStyle:{fontSize:14, fontWeight:'bold'},
        tabBarActiveTintColor: "blue",
        tabBarStyle:{
            backgroundColor:'white',
            height:45
        }
    }}>
      <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
        //   tabBarIcon: ({ color }) => (
        //     <MaterialCommunityIcons name="home" color={color} size={36} />
        //   ),
        }}/>

      <Tab.Screen name="Setting" component={Setting}  options={{
          tabBarLabel: 'Setting',
        //   tabBarIcon: ({ color }) => (
        //     <FontAwesome name="search" color={color} size={35} />
        //   ),
        }} />

    </Tab.Navigator>
    
  );
}
export default UITab;