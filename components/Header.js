import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Pressable style={styles.menuBar}>
                    <View style={styles.smallBar}></View>
                    <View style={styles.middleBar}></View>
                    <View style={styles.smallBar}></View>
                </Pressable>
                <View style={{width: '60%', justifyContent: 'center', alignItems: 'center', paddingVertical: 15}}>
                    <Image source={require('../assets/NetworkTravelsLogo2.png')} style={{width: '90%', height: 43, resizeMode: 'contain'}} />
                </View>
                <View>
                    <Ionicons name='notifications-outline' size={34} />
                </View>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAD008',
        height: 150,
        justifyContent: 'center',
        paddingTop: 40,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 10,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    menuBar: {
        width: 50,
        height: 40,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    smallBar: {
        width: 15,
        height: 2.5,
        backgroundColor: '#000000'
    },
    middleBar: {
        width: 25,
        height: 2.5,
        backgroundColor: '#000000'
    }
});