import { StyleSheet } from 'react-native';
import { graniteGray } from '../../styles/colors';
const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
    },
    logo: {
        width: '40%',
        height: '40%', 
        aspectRatio: 1,
        alignSelf: 'center',
        resizeMode: 'contain', 
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
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight:  10,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'black'
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
  });

export default styles;
