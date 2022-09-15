import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import GeneralHeader from '../components/GeneralHeader';
import Lottie from 'lottie-react-native';


const CancelTicket3 = ({navigation}) => {

    return (
        <View style={{flex: 1}}>
            <GeneralHeader heading={'Cancel booking'} />
            {/* <ProgressSteps>
                <ProgressStep label="First Step" nex>
                    <View style={{alignItems: 'center'}}>
                        <Text>This is the content within step 1!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="Second Step">
                    <View style={{alignItems: 'center'}}>
                        <Text>This is the content within step 2!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="Third Step">
                    <View style={{alignItems: 'center'}}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps> */}
            <View style={styles.stepsConatiner}>
                <View style={styles.singleConatiner}>
                    <View style={styles.selectedSteps}>
                        <Text style={styles.selectedText}>1</Text>
                    </View>
                    <Text style={{fontSize: 10}}>Select passenger</Text>
                </View>
                <View style={styles.selectedLine} />
                <View style={styles.singleConatiner}>
                    <View style={styles.selectedSteps}>
                        <Text style={styles.selectedText}>2</Text>
                    </View>
                    <Text style={{fontSize: 10}}>Refund amount</Text>
                </View>
                <View style={styles.selectedLine} />
                <View style={styles.singleConatiner}>
                    <View style={styles.selectedSteps}>
                        <Text style={styles.selectedText}>3</Text>
                    </View>
                    <Text style={{fontSize: 10}}>Success</Text>
                </View>
            </View>

            <Lottie source={require('../success/success.json')} autoPlay loop={false} />


            <View style={{position: 'absolute', bottom: 40, left: 50, right: 50}}>
                <Pressable android_ripple={{color: '#515151'}} style={styles.downloadButton} onPress={() => navigation.navigate('Bookings')}>
                    <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold', letterSpacing: 1}}>DONE</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default CancelTicket3;

const styles = StyleSheet.create({
    stepsConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 40,
        position: 'relative'
    },
    singleConatiner: {
        alignItems: 'center',
    },
    steps: {
        borderColor: '#FAD008',
        borderWidth: 1.5,
        height: 60,
        width: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    selectedSteps: {
        backgroundColor: '#FAD008',
        height: 60,
        width: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    selectedText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        opacity: 0.5
    },
    line: {
        backgroundColor: '#FAD008',
        height: 5,
        width: '10%',
        opacity: 0.3
    },
    selectedLine: {
        backgroundColor: '#FAD008',
        height: 5,
        width: '10%',
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
        fontSize: 18,
        marginBottom: 10
    },
    detailsText: {
        fontSize: 15,
        paddingVertical: 5
    },
    innerCircle: {
        height: 10,
        width: 10,
        margin: 2,
        borderRadius: 50,
        overflow: 'hidden'
    },
    radioButton: {
        height: 18,
        width: 18,
        borderColor: '#000000',
        borderWidth: 2,
        marginHorizontal: 5,
        borderRadius: 50,
        overflow: 'hidden',
    },
    downloadButton: {
        backgroundColor: '#000000',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 8,
        elevation: 5
    },
});

