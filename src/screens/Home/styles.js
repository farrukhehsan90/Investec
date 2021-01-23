import {StyleSheet} from 'react-native';
import {screenWidth, screenHeight} from '../../constants/screen';

export default StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#1a1924',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
  },
  headerContainer: {
    marginBottom: 50,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  signOutButton: {
    backgroundColor: '#6eb1f7',
  },
  signOutIcon: {
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  paragraph: {
    color: '#a3ad1b',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
});
