import {StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {LinearGradient} from 'expo-linear-gradient';

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('OnBoarding1');
        }, 2000);
    }, []);


    return (
        <LinearGradient colors={['#FAD008', '#FAA808']} style={styles.mainContainer}>
            <Image source={require('../assets/NetworkTravelsLogo.png')} style={styles.logoContainer} />
            <Image source={require('../assets/30Years.png')} />
            <Image source={require('../assets/bus.png')} style={styles.busContainer} />
        </LinearGradient>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    logoContainer: {
        marginTop: 80
    },
    busContainer: {
        marginBottom: 50
    }
});