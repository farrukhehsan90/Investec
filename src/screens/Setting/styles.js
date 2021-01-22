import { StyleSheet } from 'react-native';
import { screenWidth, screenHeight } from '../../constants/screen';

export default StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: '#1a1924',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paragraph: {
        color: '#a3ad1b',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 30,
        textAlign: 'center'
    },
    name: {
        color: '#6eb1f7',
        fontWeight: 'bold'
    }
});