import React from 'react'
import { Text } from 'react-native'
import { textColor } from '../Colors';
import { getTheme } from '../Utils';

export default (props) => {
    return (
        <Text {...props} style={{ color: textColor[getTheme()], ...props.style }} />
    )
}
