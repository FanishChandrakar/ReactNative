import { Dimensions, Platform, StatusBar } from 'react-native';

let { height, width } = Dimensions.get('window')
export const StatusBarHeight = StatusBar.currentHeight

// height = height - (StatusBarHeight ? StatusBarHeight : 0)
// width = width

// width = width / 2
// height = height / 2

export { height, width }

export const heightRatio = height / 640
export const widthRatio = width / 360
export const ratio = width / 360 // 1 - (1.779 - (height / width).toFixed(3))
export const headerHeight = 56
export const PlatformIOS = Platform.OS === 'ios';
export const PlatformAndroid = Platform.OS === 'android';