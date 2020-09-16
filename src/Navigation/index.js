import React, { Component } from 'react'
import { Text, View, Button, BackHandler, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RootNavigator from './config';
import { DemoScreen } from '../Screens';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SettingsScreen</Text>
        </View>
    );
}

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>DetailsScreen</Text>
        </View>
    );
}

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

function ScreenDrawer({ navigation }) {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Home" component={ScreenTab} />
        </Drawer.Navigator>
    );
}

function ScreenTab({ navigation }) {
    let TabList = [
        {
            name: 'Home',
            component: DemoScreen,
            // function:()=>null,
            activeIcon: 'home-sharp',
            deactiveIcon: 'home-outline',
        },
        {
            name: 'Settings',
            component: SettingsScreen,
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
            activeTintColor: 'lightblue',
            inactiveTintColor: 'gray',
        }} />
    );
}

function ScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Drawer"
            headerMode="none"
        >
            <Stack.Screen name="Drawer" component={ScreenDrawer} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}

export default () =>
    <RootNavigator>
        <ScreenStack />
    </RootNavigator>