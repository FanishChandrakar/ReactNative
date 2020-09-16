import React from 'react'
import { SafeAreaView } from 'react-native'

import Navigation from './Navigation'

import { connect } from 'react-redux';
import { } from './Redux/Actions';
import Styles from './Styles';

function Main(props) {
    console.log("Main==>", { props, Styles })
    return (
        <>
            <Navigation />
        </>
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
