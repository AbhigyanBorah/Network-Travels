import {Pressable, StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import JourneyHeader from '../components/JourneyHeader';
import BusDetails from '../components/BusDetails';
import dumydata from '../data/dummyData';
import {Fontisto} from "@expo/vector-icons";

const BusTypes = ({navigation}) => {

    const [selectedBusType, setSelectedBusType] = useState('all');
    const [busesToShow, setBusesToShow] = useState([]);

    var totalAC = 0;
    var morningDep = 0;
    dumydata.forEach((item) => {
        if (item.ac) totalAC++;
        if (item.morning) morningDep++;
    });

    function renderBusDetails(buses) {
        return (
            <BusDetails ac={buses.item.ac} seats={buses.item.avail_seat} price={buses.item.price} sleeper={buses.item.sleeper} />
        );
    }

    useEffect(() => {
        filterBuses();
    }, [selectedBusType]);


    function filterBuses() {
        if (selectedBusType === 'all') {
            setBusesToShow(dumydata);
        } else if (selectedBusType === 'AC') {
            const filteredBus = dumydata.filter((bus) => bus.ac === true);
            setBusesToShow(filteredBus);
        } else if (selectedBusType === 'morning') {
            const filteredBus = dumydata.filter((bus) => bus.morning === true);
            setBusesToShow(filteredBus);
        }
    }

    return (
        <View style={styles.rootContainer}>
            <JourneyHeader />
            <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 30, width: '90%'}}>
                    <Pressable style={selectedBusType === 'all' ? styles.selectedBusTypeContainer : styles.busTypeContainer} onPress={() => {setSelectedBusType('all');}}>
                        <View style={{width: '60%'}}><Text style={[selectedBusType === 'all' ? {color: '#FAD008'} : {color: '#000000'}, styles.busTypeText]}>All  buses</Text></View>
                        <Text style={[selectedBusType === 'all' ? {color: '#FAD008'} : {color: '#000000'}, styles.busTypeNumber]}>{dumydata.length}</Text>
                    </Pressable>
                    <Pressable style={selectedBusType === 'AC' ? styles.selectedBusTypeContainer : styles.busTypeContainer} onPress={() => setSelectedBusType('AC')}>
                        <View style={{width: '60%'}}>
                            <Text style={[selectedBusType === 'AC' ? {color: '#FAD008'} : {color: '#000000'}, styles.busTypeText]}>AC  buses</Text></View>
                        <Text style={[selectedBusType === 'AC' ? {color: '#FAD008'} : {color: '#000000'}, styles.busTypeNumber]}>{totalAC}</Text>
                    </Pressable>
                    <Pressable style={selectedBusType === 'morning' ? styles.selectedBusTypeContainer : styles.busTypeContainer} onPress={() => setSelectedBusType('morning')}>
                        <View style={{width: '60%'}}><Text style={[selectedBusType === 'morning' ? {color: '#FAD008'} : {color: '#000000'}, styles.busTypeText]}>Morning departure</Text></View>
                        <Text style={[selectedBusType === 'morning' ? {color: '#FAD008'} : {color: '#000000'}, styles.busTypeText, styles.busTypeNumber]}>{morningDep}</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.divider}>
                <View style={[{backgroundColor: '#000000', height: 1.1}, selectedBusType === 'all' ? {flex: 1} : selectedBusType === 'AC' ? {flex: 5} : {flex: 5}]} />
                <Image source={require('../assets/curveUp.png')} />
                <View style={[{backgroundColor: '#000000', height: 1.1}, selectedBusType === 'all' ? {flex: 6} : selectedBusType === 'AC' ? {flex: 7} : {flex: 2}]} />
            </View>

            <FlatList data={busesToShow} renderItem={renderBusDetails} style={{paddingHorizontal: 50}} contentContainerStyle={{paddingBottom: 100}} />

            <View style={styles.bottomContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 70}}>
                    <Text style={styles.bottomContainerText}>AC</Text>
                    <Text style={styles.bottomContainerText}>SLEEPER</Text>
                    <Text style={styles.bottomContainerText}>PICK UP AFTER 6PM</Text>
                    <Pressable onPress={() => navigation.navigate('Filter')} style={{backgroundColor: '#ffffff', padding: 15, borderRadius: 50}}>
                        <Fontisto name='equalizer' size={20} style={{transform: [{rotate: '90deg'}]}} />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default BusTypes;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    busTypeContainer: {
        backgroundColor: '#FAD008',
        borderColor: 'transparent',
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        elevation: 5
    },
    selectedBusTypeContainer: {
        backgroundColor: '#ffffff',
        borderColor: '#FAD008',
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
    },
    busTypeText: {
        fontWeight: 'bold',
        fontSize: 17
    },
    busTypeNumber: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: -10
    },
    bottomContainer: {
        height: 70,
        position: 'absolute',
        bottom: 16,
        right: 16,
        left: 16,
        borderRadius: 50,
        elevation: 2,
        backgroundColor: '#FAD008'
    },
    bottomContainerText: {
        fontWeight: 'bold',
        fontSize: 16
    }
});