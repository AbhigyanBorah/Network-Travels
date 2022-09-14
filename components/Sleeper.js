import {Image, ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Sleeper = ({number}) => {

    const [pressed, setPressed] = useState(false);

    function onPress() {
        setPressed(!pressed);
    }
    return (
        <Pressable onPress={onPress}>
            <View style={styles.seats}>
                <ImageBackground source={require('../assets/bed.png')} style={pressed ? [styles.seatImg, {backgroundColor: '#00AA63'}] : [styles.seatImg, {backgroundColor: '#ffffff'}]}>
                    <Text style={styles.seatNo}>{number}</Text>
                    <View style={styles.pillow}></View>
                </ImageBackground>
            </View>
        </Pressable>
    );
};

export default Sleeper;

const styles = StyleSheet.create({
    mainSeat: {
        // 
    },
    seats: {
        position: 'relative',
        padding: 5,
    },
    seatImg: {
        width: 42,
        height: 90,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    seatNo: {
        fontWeight: 'bold'
    },
    pillow: {
        position: 'absolute',
        width: 35,
        height: 15,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 6,
        bottom: '8%',
        left: '8%',
        right: '8%'
    }
});