import { StyleSheet } from 'react-native';

import { appBackColor } from '../../Colors';
import Styles from '../../Styles';
import { getScale } from '../../Utils/Operations';

const spaceVertical = getScale(10), spaceHorizontal = getScale(10)

export default StyleSheet.create({
    cover: {
        flex: 1,
    },
    rowView: {
        flexDirection: 'row',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})