import React, { Component } from 'react'
import { } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';

import { Templete } from '../Screens';

import Drawers from './Drawers';


const Stack = createStackNavigator();

export default () =>
    <Stack.Navigator
        initialRouteName="Drawer"
        headerMode="none"
    >
        <Stack.Screen name="Drawer" component={Drawers} />
        <Stack.Screen name="Details" component={Templete} />
    </Stack.Navigator>