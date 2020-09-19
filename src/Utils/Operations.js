import { Linking } from 'react-native';
import { ratio } from './Dimensions';

export const getScale = (value) => value * ratio

export const linkURL = (url) => {
    Linking.canOpenURL(url)
        .then(supported => {
            if (!supported) {
                console.log('Link not supported');
            } else {
                return Linking.openURL(url);
            }
        })
        .catch(err => console.log(err));
}

export const stringTo = (text, type) => {
    text = text ? text : ''
    switch (type) {
        case 'uc':
            return text.toUpperCase()
        case 'lc':
            return text.toLowerCase()
        case 'fc':
            return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
        default:
            return text
    }
}

export const hasValue = (key) => {
    if (key) return true
    return false
}
