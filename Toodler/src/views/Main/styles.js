import { StyleSheet } from 'react-native';
import { darkerBlue, graniteGray } from '../../styles/colors';
const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center', // Centers children vertically
    alignItems: 'center', // Centers children horizontally
    },
    logo: {
        width: '40%', // Adjust percentage as needed for responsiveness
        height: '40%', // Maintain the aspect ratio
        aspectRatio: 1, // Ensure a square aspect ratio
        alignSelf: 'center',
        resizeMode: 'contain', // Scale the image without distortion
        display: 'flex'
    },  
    headerText: {
      textAlign: 'center',
      marginVertical: 10,
      fontSize: 18,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    paragraph: {
        textAlign: 'center',
        color: 'black',
        fontSize: 50,
    },
    button: {
        marginTop: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: graniteGray
    },
    buttonText: {
        color: 'white'
    },
  });

export default styles;
