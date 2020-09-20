import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import Navigation from './Navigation'

import { connect } from 'react-redux';
import { } from './Redux/Actions';
import Styles from './Styles';
import { statusBar, headerColor } from './Colors';

function Main(props) {
    console.log("Main==>", { props, Styles })
    return (
        <>
            <StatusBar backgroundColor={headerColor} barStyle={statusBar[props.Theme]} />
            <Navigation />
        </>
    )
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps==>', { state })

    return {
        // ...state,
        Theme: state.AppData.theme
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
