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
        fontSize: 20,
        marginBottom: 30
    },
    textInput: {
        height: 40,
        borderColor: '#ffffff',
        borderWidth: 1,
        width: '75%',
        paddingLeft: 15,
        color: 'white',
        borderRadius: 30,
        marginBottom: 30
    },
    buttonContainer: {
        padding: 10,
        backgroundColor: '#6eb1f7',
        width: 100,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
});