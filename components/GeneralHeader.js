import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';

const GeneralHeader = ({heading}) => {

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                {heading === 'Order Confirmation' || heading === 'My Bookings' || heading === 'Profile' ? <View style={{width: 30}} /> :
                    <Pressable android_ripple={{color: '#d9b605'}} onPress={() => navigation.goBack()}><Ionicons name='arrow-back-outline' size={30} /></Pressable>
                }
                <View style={{width: '60%', justifyContent: 'center', alignItems: 'center', paddingVertical: 15}}>
                    <Text style={{fontSize: 28, fontWeight: 'bold', textAlign: 'center'}}>{heading}</Text>
                </View>
            </View>
        </View>
    );
};

export default GeneralHeader;

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
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%'
    },
});