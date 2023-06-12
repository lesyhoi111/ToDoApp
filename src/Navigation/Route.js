import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Main from '../Screens/Main';
import Setting from '../Screens/Setting';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();


function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
               drawerContent={props => <CustomDrawer {...props} />}
               screenOptions={{
                 headerShown: true,
                 drawerLabelStyle: {
                   marginLeft: -20,
                 },
               }}
            >
                <Drawer.Screen component={Main} name={"Main"} />
                <Drawer.Screen component={Setting} name={"Setting"} />
                
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Routes