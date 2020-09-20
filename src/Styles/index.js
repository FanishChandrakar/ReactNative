import { StyleSheet } from 'react-native';
import { ratio, width, height } from '../Utils';
import { whiteColor, appBackColor } from '../Colors';

const fontScale = 0.9
const _getFontSize = (value) => value * ratio * fontScale

export default StyleSheet.create({
    Container: {
        height,
        width,
        flex: 1,
        zIndex: 1
    },

    Button: { padding: 10 },
    ButtonText: {
        color: whiteColor,
        // fontWeight: 'bold'
    },

    TextInput: {
        fontSize: _getFontSize(14),
        // height: _getFontSize(28),
    },

    H1: { fontSize: _getFontSize(10), fontWeight: 'bold' },
    H2: { fontSize: _getFontSize(12), fontWeight: 'bold' },
    H3: { fontSize: _getFontSize(14), fontWeight: 'bold' },
    H4: { fontSize: _getFontSize(16), fontWeight: 'bold' },
    H5: { fontSize: _getFontSize(18), fontWeight: 'bold' },
    H6: { fontSize: _getFontSize(20), fontWeight: 'bold' },
    H7: { fontSize: _getFontSize(22), fontWeight: 'bold' },
    H8: { fontSize: _getFontSize(24), fontWeight: 'bold' },
    H9: { fontSize: _getFontSize(26), fontWeight: 'bold' },
    H10: { fontSize: _getFontSize(28), fontWeight: 'bold' },
    H11: { fontSize: _getFontSize(30), fontWeight: 'bold' },
    H12: { fontSize: _getFontSize(32), fontWeight: 'bold' },

    T0: { fontSize: _getFontSize(8) },
    T1: { fontSize: _getFontSize(10) },
    T2: { fontSize: _getFontSize(12) },
    T3: { fontSize: _getFontSize(14) },
    T4: { fontSize: _getFontSize(16) },
    T5: { fontSize: _getFontSize(18) },
    T6: { fontSize: _getFontSize(20) },
    T7: { fontSize: _getFontSize(22) },
    T8: { fontSize: _getFontSize(24) },
    T9: { fontSize: _getFontSize(26) },
    T10: { fontSize: _getFontSize(28) },
    T11: { fontSize: _getFontSize(30) },
    T12: { fontSize: _getFontSize(32) },

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