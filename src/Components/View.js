import React from 'react'
import { View } from 'react-native'
import { appBackColor } from '../Colors';
import Store from '../Redux/Store';

export default (props) => {
    const Theme = Store.getState().AppData.theme
    return (
        <View {...props} style={{ backgroundColor: appBackColor[Theme], ...props.style }} />
    )
}
