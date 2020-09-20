import React, { Component } from 'react'
import {  View } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';

import { } from '../Screens';

import Tabs from './Tabs';
import { Text } from '../Components';


const Drawer = createDrawerNavigator();


function CustomDrawer({ navigation }) {
    const navigateTo = (Route) => {
        navigation.closeDrawer();
        navigation.navigate(Route)
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>CustomDrawer</Text>
        </View>
    );
}

export default ({ navigation }) =>
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={Tabs} />
    </Drawer.Navigator>