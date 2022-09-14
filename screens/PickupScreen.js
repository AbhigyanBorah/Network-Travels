import {StyleSheet, Text, TextInput, View, Pressable} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
// import {Dropdown} from 'react-native-material-dropdown';

import GeneralHeader from '../components/GeneralHeader';
import JourneyType from '../components/JourneyType';

const PickupScreen = ({navigation}) => {
    // const data = [{
    //     value: 'Banana',
    // }, {
    //     value: 'Mango',
    // }, {
    //     value: 'Pear',
    // }];

    return (
        <View style={{flex: 1}}>
            <GeneralHeader heading={'Pickup & drop points'} />
            <JourneyType />
            <View style={{justifyContent: 'center'}}>
                <Text style={styles.text}>Select pickup point</Text>
                <TextInput style={styles.input} placeholder='Pickup Point' />
                <Text style={styles.text}>Select dropoff point</Text>
                <TextInput style={styles.input} autoComplete="street-address" placeholder='Drop-off Point' />
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
                    <Pressable onPress={() => navigation.navigate('Passenger detail')}>
                        <View style={styles.nextContainer}>
                            <Text style={{fontSize: 20, fontWeight: "bold"}}>NEXT</Text>
                            <Ionicons name='chevron-forward-sharp' size={24} style={{paddingLeft: 10}} />
                        </View>
                    </Pressable>
                </View>
            </View>
            {/* <Dropdown data={data} /> */}
        </View>
    );
};

export default PickupScreen;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#e2e2e2',
        paddingVertical: 15,
        marginHorizontal: 55,
        marginBottom: 10,
        borderRadius: 5,
        paddingLeft: 15
    },
    text: {
        marginHorizontal: 55,
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 10
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