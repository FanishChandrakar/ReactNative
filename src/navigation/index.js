import React, { Component } from 'react'
import { Text, View, Button, BackHandler, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { } from '../redux/actions';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PlatformAndroid } from '../utils';
import { DemoScreen } from '../screens';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SettingsScreen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
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

function TabScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'construct' : 'construct-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={DemoScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
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

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this._currentState = 0
    }

    componentDidMount() {
        if (PlatformAndroid) {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        }
    }

    componentWillUnmount() {
        if (PlatformAndroid) {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
        }
    }

    handleBackButtonClick() {
        if (this._currentState == 0) {
            Alert.alert(
                'Exit !!!',
                'Are you sure you want to exit.',
                [
                    {
                        text: 'Cancel',
                        onPress: () => null,
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => BackHandler.exitApp() },
                ],
                { cancelable: false },
            );
            return true
        }
        else
            return false
    }

    _onStateChange = (state) => {
        console.log('_onStateChange==>', { state })
        this._currentState = state.index
    }

    render() {
        let { props } = this
        console.log('Navigation==>', { props })
        return (
            <NavigationContainer onStateChange={this._onStateChange}>
                <Stack.Navigator
                    initialRouteName="Drawer"
                    headerMode="none">
                    <Stack.Screen name="Drawer" component={MyDrawer} />
                    <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps==>', { state })

    return {
        ...state,
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)