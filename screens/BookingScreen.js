import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import GeneralHeader from '../components/GeneralHeader';

const BookingScreen = ({navigation}) => {
    const [bookingType, setBookingType] = useState('all');

    return (
        <View style={{flex: 1}}>
            <GeneralHeader heading={'My Bookings'} />
            <View style={styles.bookingTypeContainer}>
                <Pressable style={[bookingType === 'all' ? {backgroundColor: 'white'} : '', styles.bookingButton]} onPress={() => setBookingType('all')}>
                    <Text style={[bookingType === 'all' ? {fontWeight: 'bold'} : {color: '#000000', opacity: 0.5}, {alignItems: 'center'}]}>All bookings</Text>
                </Pressable>
                <Pressable style={[bookingType === 'cancelled' ? {backgroundColor: 'white'} : '', styles.bookingButton]} onPress={() => setBookingType('cancelled')}>
                    <Text style={[bookingType === 'cancelled' ? {fontWeight: 'bold'} : {color: '#000000', opacity: 0.5}, {alignItems: 'center'}]}>Cancelled bookings</Text>
                </Pressable>
            </View>

            {bookingType === 'all' ? <View style={styles.blockContainer}>
                <View style={styles.upcomingHeader}>
                    <Text style={{color: '#ffffff', textAlign: 'center', fontWeight: 'bold'}}>UPCOMING</Text>
                </View>
                <View style={styles.textContainers}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>BOOKING ID</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>PNR - 1215420</Text>
                </View>
                <View style={styles.textContainers}>
                    <Text>Guwahati</Text>
                    <Text>Jorhat</Text>
                </View>
                <View style={styles.textContainers}>
                    <Text>Sunday, 21 April</Text>
                    <Text>7(LB),7(UB)</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Pressable android_ripple={{color: '#515151'}} style={styles.buttons} onPress={() => navigation.navigate('Rate & review')}>
                        <Text style={{color: '#ffffff'}}>Rate & review</Text>
                    </Pressable>
                    <Pressable android_ripple={{color: '#515151'}} style={styles.buttons}>
                        <Text style={{color: '#ffffff'}}>Download ticket</Text>
                    </Pressable>
                    <Pressable android_ripple={{color: '#515151'}} style={styles.buttons} onPress={() => navigation.navigate('CancelTicket1')}>
                        <Text style={{color: '#ffffff'}}>Cancel ticket</Text>
                    </Pressable>
                </View>
            </View> : ''}

            <View style={styles.blockContainer}>
                <View style={styles.cancelledHeader}>
                    <Text style={{color: '#ffffff', textAlign: 'center', fontWeight: 'bold'}}>CANCELLED</Text>
                </View>
                <View style={styles.textContainers}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>BOOKING ID</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>PNR - 1215420</Text>
                </View>
                <View style={styles.textContainers}>
                    <Text>Guwahati</Text>
                    <Text>Jorhat</Text>
                </View>
                <View style={styles.textContainers}>
                    <Text>Sunday, 21 April</Text>
                    <Text>7(LB),7(UB)</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Pressable android_ripple={{color: '#515151'}} style={styles.buttons} onPress={() => navigation.navigate('Rate & review')}>
                        <Text style={{color: '#ffffff'}}>Rate & review</Text>
                    </Pressable>
                    <Pressable android_ripple={{color: '#515151'}} style={styles.buttons}>
                        <Text style={{color: '#ffffff'}}>Download ticket</Text>
                    </Pressable>
                    <Pressable android_ripple={{color: '#515151'}} style={styles.buttons} onPress={() => navigation.navigate('CancelTicket1')}>
                        <Text style={{color: '#ffffff'}}>Cancel ticket</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default BookingScreen;

const styles = StyleSheet.create({
    bookingTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FAD008',
        paddingVertical: 9,
        paddingHorizontal: 8,
        borderRadius: 5,
        marginHorizontal: 50,
        marginVertical: 30
    },
    bookingButton: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5
    },
    blockContainer: {
        backgroundColor: 'rgba(250, 208, 8, 0.15)',
        borderColor: '#FAD008',
        borderWidth: 1.5,
        marginHorizontal: 50,
        marginVertical: 10,
        borderRadius: 5
    },
    upcomingHeader: {
        backgroundColor: '#00AA63',
        paddingVertical: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    cancelledHeader: {
        backgroundColor: '#FA4208',
        paddingVertical: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    textContainers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 15
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 35,
        marginBottom: 20
    },
    buttons: {
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 5,
        elevation: 5
    }
});