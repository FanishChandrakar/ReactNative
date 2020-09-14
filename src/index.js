import React from 'react'
import { View } from 'react-native'

import Navigation from './navigation'

import { connect } from 'react-redux';
import { } from './redux/actions';

const Main = (props) => {
    console.log("Main==>", { props })
    return (
        <View style={{ flex: 1 }}>
            <Navigation />
        </View>
    )
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps==>', { state })

    return {
        ...state,
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
