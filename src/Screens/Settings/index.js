import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import { } from '../../Redux/Actions';

import Style from './Style'

const Settings = (props) => {
    console.log('Settings==>', { props })
    return (
        <View style={{ ...Style.cover, ...Style.center }}>
            <Text>SettingsScreen</Text>
        </View>
    );
};

const mapStateToProps = (state) => {
    // console.log('mapStateToProps==>', { state })

    return {
        ...state,
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
