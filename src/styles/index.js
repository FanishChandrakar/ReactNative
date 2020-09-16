import { StyleSheet } from 'react-native';
import { ratio, width, height } from '../Utils';
import { textColor, whiteColor, appBackColor } from '../Colors';

const fontScale = 0.9
const _getSize = (value) => value * ratio * fontScale

export default StyleSheet.create({
    Container: {
        height,
        width,
        flex: 1,
        backgroundColor: appBackColor,
        zIndex: 1
    },

    Button: { padding: 10 },
    ButtonText: {
        color: whiteColor,
        // fontWeight: 'bold'
    },

    TextInput: {
        fontSize: _getSize(14),
        // height: _getSize(28),
    },

    H1: { fontSize: _getSize(10), fontWeight: 'bold', color: textColor },
    H2: { fontSize: _getSize(12), fontWeight: 'bold', color: textColor },
    H3: { fontSize: _getSize(14), fontWeight: 'bold', color: textColor },
    H4: { fontSize: _getSize(16), fontWeight: 'bold', color: textColor },
    H5: { fontSize: _getSize(18), fontWeight: 'bold', color: textColor },
    H6: { fontSize: _getSize(20), fontWeight: 'bold', color: textColor },
    H7: { fontSize: _getSize(22), fontWeight: 'bold', color: textColor },
    H8: { fontSize: _getSize(24), fontWeight: 'bold', color: textColor },
    H9: { fontSize: _getSize(26), fontWeight: 'bold', color: textColor },
    H10: { fontSize: _getSize(28), fontWeight: 'bold', color: textColor },
    H11: { fontSize: _getSize(30), fontWeight: 'bold', color: textColor },
    H12: { fontSize: _getSize(32), fontWeight: 'bold', color: textColor },

    T0: { fontSize: _getSize(8), color: textColor },
    T1: { fontSize: _getSize(10), color: textColor },
    T2: { fontSize: _getSize(12), color: textColor },
    T3: { fontSize: _getSize(14), color: textColor },
    T4: { fontSize: _getSize(16), color: textColor },
    T5: { fontSize: _getSize(18), color: textColor },
    T6: { fontSize: _getSize(20), color: textColor },
    T7: { fontSize: _getSize(22), color: textColor },
    T8: { fontSize: _getSize(24), color: textColor },
    T9: { fontSize: _getSize(26), color: textColor },
    T10: { fontSize: _getSize(28), color: textColor },
    T11: { fontSize: _getSize(30), color: textColor },
    T12: { fontSize: _getSize(32), color: textColor },

    B1: { fontWeight: '100' },
    B2: { fontWeight: '200' },
    B3: { fontWeight: '300' },
    B4: { fontWeight: '400' },
    B5: { fontWeight: '500' },
    B6: { fontWeight: '600' },
    B7: { fontWeight: '700' },
    B8: { fontWeight: '800' },
    B9: { fontWeight: '900' },


    ApplyShadow1: { shadowOffset: { height: 0, width: 0 }, shadowOpacity: 0.5, elevation: 1, zIndex: 10 },
    ApplyShadow2: { shadowOffset: { height: 1, width: 1 }, shadowOpacity: 0.5, elevation: 2, zIndex: 10 },
    ApplyShadow3: { shadowOffset: { height: 2, width: 0 }, shadowOpacity: 0.5, elevation: 4, zIndex: 10 },
    ApplyShadow4: { shadowOffset: { height: 4, width: 2 }, shadowOpacity: 0.5, elevation: 6, zIndex: 10 },
    ApplyShadow5: { shadowOffset: { height: 6, width: 3 }, shadowOpacity: 0.5, elevation: 8, zIndex: 10 },
    ApplyShadow6: { shadowOffset: { height: 8, width: 4 }, shadowOpacity: 0.5, elevation: 10, zIndex: 10 },

})