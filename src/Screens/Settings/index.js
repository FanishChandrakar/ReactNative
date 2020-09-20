import React from 'react';
import { View, Switch } from 'react-native';

import { connect } from 'react-redux';
import { } from '../../Colors';
import { Text } from '../../Components';
import { setAppTheme } from '../../Redux/Actions';

import Style from './Style'

const Settings = (props) => {
    console.log('Settings==>', { props })
    return (
        <View style={{ ...Style.cover, ...Style.center }}>
            <Text style={{ ...Style.text }}>SettingsScreen</Text>
            <Switch value={props.isDark} onValueChange={() => props.setAppTheme()} />
        </View>
    );
};

const mapStateToProps = (state) => {
    // console.log('mapStateToProps==>', { state })

    return {
        // ...state,
        isDark: state.AppData.theme === 'dark'
    }
}

const mapDispatchToProps = {
    setAppTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
