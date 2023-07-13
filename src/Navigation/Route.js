import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import React from 'react';
import Main from '../Screens/Main';
import StackSetting from './StackSetting';
import StackProject from './StackProject';
import StackHome from './StackHome';
import CustomDrawer from './CustomDrawer';
import { EventRegister } from 'react-native-event-listeners'
import theme from '../../config/theme'
import themeContext from '../../config/themeContext'

const Drawer = createDrawerNavigator();


function Routes() {
  const [ischecked,setIsChecked]=useState(false)
  useEffect(()=>{
      let eventlistener=EventRegister.addEventListener("changetheme",(data)=>{setIsChecked(data)})
      return ()=>{EventRegister.removeEventListener(eventlistener)}
  })
    return (
      <themeContext.Provider value={ischecked===true ? theme.dark:theme.light}>
        <NavigationContainer>
            <Drawer.Navigator
               drawerContent={props => <CustomDrawer {...props} />}
               screenOptions={{
                 headerShown: false,
                 drawerLabelStyle: {
                   marginLeft: 5,
                   fontSize:17
                 },
                 drawerStyle: {
                  backgroundColor: 'antiquewhite',
                },
                drawerActiveBackgroundColor:"rgba(265,265,265,0.7)"
               }}
            >
                <Drawer.Screen component={Main} name={"Main"} />
                <Drawer.Screen component={StackSetting} name={"Setting"} />
                <Drawer.Screen component={StackProject} name={"Project"} />
                
            </Drawer.Navigator>
        </NavigationContainer>
      </themeContext.Provider>
    )
}

export default Routes