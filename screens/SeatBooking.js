import {ScrollView, StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Ionicons} from '@expo/vector-icons';

import JourneyHeader from '../components/JourneyHeader';
import JourneyType from '../components/JourneyType';
import Berth from '../components/Berth';
import RestStop from '../components/RestStop';
import Amenities from '../components/Amenities';


const SeatBooking = ({navigation}) => {
    const [seatBooking, setSeatBooking] = useState(false);

    function onBooking() {
        setSeatBooking(true);
    }

    return (
        <View style={{flex: 1}}>
            <JourneyHeader />
            <ScrollView contentContainerStyle={{paddingBottom: 80}}>
                <JourneyType />
                <Berth onPress={onBooking} />
                <RestStop />
                <Amenities />
            </ScrollView>

            {seatBooking &&
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
                        <Pressable onPress={() => navigation.navigate('Pickup and drop')}>
                            <View style={styles.nextContainer}>
                                <Text style={{fontSize: 20, fontWeight: "bold"}}>NEXT</Text>
                                <Ionicons name='chevron-forward-sharp' size={24} style={{paddingLeft: 10}} />
                            </View>
                        </Pressable>
                    </View>
                </View>}
        </View>
    );
};

export default SeatBooking;

const styles = StyleSheet.create({
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