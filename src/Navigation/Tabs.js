import React, { Component } from 'react'
import { } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Demo, Settings } from '../Screens';
import { appColor } from '../Colors';

const Tab = createBottomTabNavigator();

export default ({ navigation }) => {
    let TabList = [
        {
            name: 'Home',
            component: Demo,
            // function:()=>null,
            activeIcon: 'home-sharp',
            deactiveIcon: 'home-outline',
        },
        {
            name: 'Settings',
            component: Settings,
            // function:()=>null,
            activeIcon: 'options-sharp',
            deactiveIcon: 'options-outline',
        },
        {
            name: 'Bookmark',
            // component: null,
            function: () => navigation.navigate('Details'),
            activeIcon: 'bookmark-sharp',
            deactiveIcon: 'bookmark-outline',
        },
    ]
        .map((item, index) =>
            item.function ?
                <Tab.Screen key={`${index}`} name={item.name} getComponent={() => <></>}
                    listeners={({ navigation, route }) => ({
                        tabPress: event => {
                            event.preventDefault()
                            item.function()
                        },
                    })}
                    options={{
                        tabBarIcon: ({ focused, color, size }) =>
                            <Ionicons name={focused ? item.activeIcon : item.deactiveIcon} size={size} color={color} />
                    }} />
                :
                <Tab.Screen key={`${index}`} name={item.name} component={item.component} options={{
                    tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? item.activeIcon : item.deactiveIcon} size={size} color={color} />
                }} />
        )

    return (
        <Tab.Navigator children={TabList} tabBarOptions={{
            showLabel: false,
            activeTintColor: appColor,
            inactiveTintColor: 'gray',
            style: {}
        }} />
    );
}