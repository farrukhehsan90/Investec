import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  swipeContainer: {
    borderWidth: 2,
    borderColor: '#34424a',
    width: '90%',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '10%',
    position: 'absolute',
    backgroundColor: '#6eb1f7',
    height: '100%',
    zIndex: 1,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#6eb1f7',
    height: '115%',
    width: 50,
    bottom: 4,
    right: 2,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#6095cc',
    fontWeight: 'bold',
  },
});
