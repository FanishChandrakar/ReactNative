import React, { Component } from 'react'
import { Text, View, Button, BackHandler, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { } from '../redux/actions';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RootNavigator from './config';
import { DemoScreen } from '../screens';


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

function TabScreen({ navigation }) {
    return (
        <Tab.Navigator
            backBehavior="initialRoute"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home-sharp' : 'home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'options' : 'options-outline';
                    } else if (route.name === 'Bookmark') {
                        iconName = focused ? 'bookmark' : 'bookmark-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                showLabel: false,
                activeTintColor: 'lightblue',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={DemoScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Bookmark" getComponent={() => <></>}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        e.preventDefault()
                        navigation.navigate('Details')
                    },
                })} />
        </Tab.Navigator>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Home" component={TabScreen} />
        </Drawer.Navigator>
    );
}

export default () => {
    return (
        <RootNavigator>
            <Stack.Navigator
                initialRouteName="Drawer"
                headerMode="none">
                <Stack.Screen name="Drawer" component={MyDrawer} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </RootNavigator>
    )
}