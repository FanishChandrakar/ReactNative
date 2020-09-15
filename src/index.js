import React from 'react'
import { SafeAreaView } from 'react-native'

import Navigation from './navigation'

import { connect } from 'react-redux';
import { } from './redux/actions';
import styles from './styles';

function Main(props) {
    console.log("Main==>", { props, styles })
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
