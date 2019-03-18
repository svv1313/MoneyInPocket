import { StyleSheet } from 'react-native';
import container from './container';
import header from './header'

export default StyleSheet.create({
    container,
    header,
    blockStyle: {
        borderTopColor: 'black',
        borderTopWidth: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '100%',
        height: '40%',
        flexDirection: 'row',
    }
});