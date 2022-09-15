import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {Ionicons, Fontisto, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const BusDetails = ({ac, seats, price, sleeper}) => {
    var type = '';
    if (ac === true && sleeper === true) {
        type = 'SLEEPER AC';
    } else if (ac === true && sleeper === false) {
        type = 'AC';
    } else {
        type = 'NON AC';
    }

    const navigation = useNavigation();

    return (
        <Pressable android_ripple={{color: '#f9f9a6'}} style={styles.mainContainer} onPress={() => navigation.navigate('SeatBooking')}>
            <View style={styles.innerContainer}>
                <View style={{flexDirection: 'row', alignItems: 'flex-start', padding: 10}}>
                    <Fontisto name='bus' size={18} style={{marginTop: 5}} />
                    <View>
                        <Image source={require('../assets/NETWORKTRAVELS-1.png')} style={{marginTop: 5, marginLeft: 10, height: 20, width: 130, resizeMode: 'contain'}} />
                        <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 12, opacity: 0.5}}>{type} (2x1)</Text>
                    </View>
                    <View style={styles.availSeats}><Text style={{fontWeight: 'bold'}}>{seats} seats</Text></View>
                </View>
                <View style={{flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 20, alignItems: 'center', justifyContent: 'space-between'}}>
                    <View><MaterialCommunityIcons name="clock-time-four" size={24} /></View>
                    <View style={styles.journeyConatiner}>
                        <Text style={{fontSize: 10, opacity: 0.5, marginBottom: -10}}>7h45m</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{marginRight: 10, alignItems: 'center'}}>
                                <Text style={{fontWeight: 'bold'}}>16:00</Text>
                                <Text style={{fontSize: 10, opacity: 0.5}}>Guwahati</Text>
                            </View>
                            <View style={styles.line}></View>
                            <View style={styles.circle}></View>
                            <View style={styles.line}></View>
                            <View style={{marginLeft: 10}}>
                                <Text style={{fontWeight: 'bold', alignItems: 'center'}}>13:45</Text>
                                <Text style={{fontSize: 10, opacity: 0.5}}>Jorhat</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome name='rupee' size={30} style={{paddingRight: 5}} />
                        <Text style={{fontSize: 24, fontWeight: 'bold'}}>{price}.00</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, paddingHorizontal: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name='shield-checkmark-sharp' color='white' size={24} />
                    <Text style={{color: '#ffffff', fontWeight: 'bold', paddingLeft: 10}}>Safe & Secure</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default BusDetails;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FAD008',
        borderColor: '#000000',
        borderWidth: 1,
        height: 200,
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden'
    },
    innerContainer: {
        backgroundColor: '#ffffff',
        height: 150,
        borderRadius: 10,
        elevation: 3
    },
    availSeats: {
        backgroundColor: '#FAD008',
        position: 'absolute',
        right: 0, top: 0,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    line: {
        backgroundColor: '#000000',
        height: 2,
        width: '15%'
    },
    circle: {
        borderColor: '#FAD008',
        borderWidth: 2,
        height: 10,
        width: 10,
        borderRadius: 50
    },
    journeyConatiner: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -30
    }
});