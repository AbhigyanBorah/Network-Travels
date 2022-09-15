import {StyleSheet, Text, TextInput, View, Pressable} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {Dropdown} from 'react-native-element-dropdown';
// import {Dropdown} from 'react-native-material-dropdown';

import GeneralHeader from '../components/GeneralHeader';
import JourneyType from '../components/JourneyType';

const data = [
    {label: 'ISBT, Bethkuchi ', value: '1'},
    {label: 'Bashistha Chariali', value: '2'},
    {label: 'Khanapara', value: '3'},
    {label: 'Jagiroad', value: '4'}
];
const data2 = [
    {label: 'Jorhat Bypass', value: '1'},
    {label: 'Jorhat ISBT', value: '2'},
    {label: 'Baruah Chariali', value: '3'}
];

const PickupScreen = ({navigation}) => {


    return (
        <View style={{flex: 1}}>
            <GeneralHeader heading={'Pickup & drop points'} />
            <JourneyType />
            <View style={{justifyContent: 'center'}}>
                <Text style={styles.text}>Select pickup point</Text>
                <Dropdown
                    style={styles.input}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    onChange={() => {}}
                />
                <Text style={styles.text}>Select dropoff point</Text>
                <Dropdown
                    style={styles.input}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={data2}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    onChange={() => {}}
                    activeColor={'#e2e2e2'}
                    flatListProps={{showsVerticalScrollIndicator: false}}
                />
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
        borderRadius: 5,
        paddingHorizontal: 15
    },
    text: {
        marginHorizontal: 55,
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 10,
        marginTop: 30
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
    },
    dropdown: {
        height: 50,
        backgroundColor: '#e2e2e2',
        borderRadius: 5,
        padding: 12,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
});