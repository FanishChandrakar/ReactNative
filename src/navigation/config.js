import React, { Component } from 'react'
import { BackHandler, Alert } from 'react-native'

import { connect } from 'react-redux';
import { } from '../redux/actions';

import { NavigationContainer } from '@react-navigation/native';
import { PlatformAndroid } from '../utils';

class Container extends Component {
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
                {props.children}
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

export default connect(mapStateToProps, mapDispatchToProps)(Container)