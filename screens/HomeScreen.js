import {Pressable, StyleSheet, Text, TextInput, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/HeaderHome';

const HomeScreen = ({navigation}) => {
    const [selectedWay, setSelectedWay] = useState('one');

    return (
        <View style={styles.rootContainer}>
            <Header />
            <ScrollView alwaysBounceVertical={true} bounces={true} >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Where are you going to?
                    </Text>
                </View>
                <View style={styles.wayContainer}>
                    <View style={styles.lines}></View>
                    <View style={styles.wayButtonContainer}>
                        <Pressable style={[selectedWay === 'one' ? {backgroundColor: 'white'} : '', styles.wayButton]} onPress={() => setSelectedWay('one')}>
                            <Text style={[selectedWay === 'one' ? {fontWeight: 'bold'} : {color: '#000000', opacity: 0.5}, {alignItems: 'center'}]}>One Way</Text>
                        </Pressable>
                        <Pressable style={[selectedWay === 'round' ? {backgroundColor: 'white'} : '', styles.wayButton]} onPress={() => setSelectedWay('round')}>
                            <Text style={[selectedWay === 'round' ? {fontWeight: 'bold'} : {color: '#000000', opacity: 0.5}, {alignItems: 'center'}]}>Round Trip</Text>
                        </Pressable>
                    </View>
                    <View style={styles.lines}></View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.upperContainer}>
                        <View style={{width: '90%', paddingRight: 10}}>
                            <TextInput placeholder='From' style={styles.input} />
                            <TextInput placeholder='To' style={styles.input} />
                        </View>
                        <View style={styles.figureContainer}>
                            <View style={styles.yellowFigure}><View style={styles.blackDot}></View></View>
                            <View style={styles.figureLine}></View>
                            <View style={styles.figureLine}></View>
                            <View style={styles.figureLine}></View>
                            <View style={styles.blackFigure}><View style={styles.yellowDot}></View></View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput placeholder='Departure date' style={styles.dateInput} />
                        <TextInput placeholder='Return date' style={styles.dateInput} />
                    </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Pressable android_ripple={{color: '#515151'}} style={styles.loginButton} onPress={() => navigation.navigate('BusTypes')}>
                        <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold', letterSpacing: 1}}>FIND A BUS</Text>
                    </Pressable>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30
                }}>

                    <Image source={require('../assets/guidelines1.png')} style={{resizeMode: 'contain', width: 200, height: 200}} />

                    <Image source={require('../assets/guidelines2.png')} style={{resizeMode: 'contain', width: 200, height: 200}} />
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    titleContainer: {
        marginVertical: 30,
        width: '80%',
        marginLeft: 40
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    wayContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 40
    },
    lines: {
        backgroundColor: '#000000',
        opacity: 0.5,
        height: 2.5,
        width: '10%',
    },
    wayButtonContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        backgroundColor: '#FAD008',
        paddingVertical: 9,
        paddingHorizontal: 8,
        borderRadius: 5
    },
    wayButtonSelected: {
        backgroundColor: 'white',
        paddingHorizontal: 60,
        paddingVertical: 8,
        borderRadius: 5
    },
    wayButton: {
        paddingHorizontal: 60,
        paddingVertical: 8,
        borderRadius: 5
    },
    inputContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
    },
    upperContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        backgroundColor: '#ececec',
        paddingVertical: 15,
        width: '100%',
        marginBottom: 10,
        borderRadius: 5,
        paddingLeft: 15
    },
    dateInput: {
        backgroundColor: '#ececec',
        paddingVertical: 15,
        width: '49%',
        marginBottom: 10,
        marginRight: 10,
        borderRadius: 5,
        paddingLeft: 15
    },
    figureContainer: {
        justifyContent: 'space-evenly',
        marginRight: 10,
        marginTop: -10,
        alignItems: 'center',
        height: 120
    },
    yellowFigure: {
        backgroundColor: '#FAD008',
        width: 20,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        padding: 5
    },
    blackDot: {
        backgroundColor: '#000000',
        width: 8,
        height: 8,
        borderRadius: 4
    },
    blackFigure: {
        backgroundColor: '#000000',
        width: 20,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        padding: 5
    },
    yellowDot: {
        backgroundColor: '#FAD008',
        width: 8,
        height: 8,
        borderRadius: 4
    },
    figureLine: {
        height: 10,
        width: 2.5,
        borderRadius: 5,
        backgroundColor: '#000000'
    },
    loginButton: {
        backgroundColor: '#000000',
        width: '80%',
        paddingVertical: 12,
        marginTop: 15,
        alignItems: 'center',
        borderRadius: 8,
        elevation: 5
    },
});