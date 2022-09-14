import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {Ionicons, Fontisto} from '@expo/vector-icons';
import GeneralHeader from '../components/GeneralHeader';

const OrderSummary = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <GeneralHeader heading={'Order Summary'} />
            <View style={styles.container}>
                <View style={{alignItems: 'flex-start'}}>
                    <Text style={styles.headingText}>From</Text>
                    <Text>Guwahati</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Fontisto name='bus' color={'#E0B900'} size={30} />
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <Text style={styles.headingText}>To</Text>
                    <Text>Jorhat</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{alignItems: 'flex-start'}}>
                    <Text style={styles.headingText}>Passengers</Text>
                    <Text>Name surname</Text>
                    <Text>Name surname</Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <Text style={styles.headingText}>Seats</Text>
                    <Text>7 (upper berth)</Text>
                    <Text>7 (upper berth)</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{alignItems: 'flex-start'}}>
                    <Text style={styles.headingText}>Departure date</Text>
                    <Text>Sunday, 22 April</Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <Text style={styles.headingText}>Departure time</Text>
                    <Text>06:00 AM</Text>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 70, paddingRight: 10, paddingLeft: 50}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 20}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>₹ 1200.00</Text>
                            <Text>For 2 seats</Text>
                        </View>
                        <Pressable onPress={() => navigation.navigate('FareDetails')}>
                            <Ionicons name='chevron-up-sharp' size={20} style={{backgroundColor: 'white', borderRadius: 50}} />
                        </Pressable>
                    </View>
                    <Pressable onPress={() => navigation.navigate('Order Confirmation')}>
                        <View style={styles.nextContainer}>
                            <Text style={{fontSize: 20, fontWeight: "bold"}}>PAY</Text>
                            <Ionicons name='chevron-forward-sharp' size={24} style={{paddingLeft: 10}} />
                        </View>
                    </Pressable>
                </View>
            </View>

        </View>
    );
};

export default OrderSummary;

const styles = StyleSheet.create({
    iconContainer: {
        padding: 15,
        backgroundColor: 'rgba(250, 208, 8, 0.15);',
        borderColor: '#FAD008',
        borderWidth: 1.5,
        borderRadius: 50,
        marginLeft: -40,
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginTop: 40,
        alignItems: 'center'
    },
    headingText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10
    },
    bottomContainer: {
        height: 70,
        position: 'absolute',
        bottom: 16,
        right: 16,
        left: 16,
        borderRadius: 50,
        elevation: 2,
        backgroundColor: '#FAD008',
    },
    nextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingLeft: 40,
        paddingRight: 20,
        borderRadius: 50
    }
});