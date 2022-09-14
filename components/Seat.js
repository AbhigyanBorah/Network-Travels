import {Image, ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Seat = ({number, onPress}) => {

    const [pressed, setPressed] = useState(false);

    function onPress2() {
        setPressed(!pressed);
        onPress();
    }

    return (
        <Pressable onPress={onPress2}>
            <View style={styles.seats}>
                <ImageBackground source={require('../assets/seat.png')} style={pressed ? [styles.seatImg, {backgroundColor: '#00AA63'}] : [styles.seatImg, {backgroundColor: '#ffffff'}]}>
                    <Text style={styles.seatNo}>{number}</Text>
                </ImageBackground>
            </View>
        </Pressable>
    );
};

export default Seat;

const styles = StyleSheet.create({

    seats: {
        padding: 5,
        overflow: 'hidden',
        resizeMode: 'contain'
    },
    seatImg: {
        width: 40,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    seatNo: {
        fontWeight: 'bold'
    }
});