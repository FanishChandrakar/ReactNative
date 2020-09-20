import React from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { Text } from '../../Components';
import { } from '../../Redux/Actions';

import Style from './Style'

const Templete = (props) => {
    console.log('Templete==>', { props })
    return (
        <View style={{ ...Style.cover, ...Style.center }}>
            <Text>TempleteScreen</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Templete)
