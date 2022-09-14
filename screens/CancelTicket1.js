import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GeneralHeader from '../components/GeneralHeader';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';


const CancelTicket1 = () => {
    return (
        <View style={{flex: 1}}>
            <GeneralHeader heading={'Cancel booking'} />
            <ProgressSteps>
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
            </ProgressSteps>
            <View style={styles.stepsConatiner}>
                <View style={styles.singleConatiner}>
                    <View style={styles.steps}>
                        <Text>1</Text>
                    </View>
                    <Text style={{fontSize: 10}}>Select passenger</Text>
                </View>
                <View style={styles.singleConatiner}>
                    <Text style={styles.steps}>2</Text>
                    <Text style={{fontSize: 10}}>Refund amount</Text>
                </View>
                <View style={styles.singleConatiner}>
                    <Text style={styles.steps}>3</Text>
                    <Text style={{fontSize: 10}}>Success</Text>
                </View>
            </View>
        </View>
    );
};

export default CancelTicket1;

const styles = StyleSheet.create({
    stepsConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginHorizontal: 10
    },
    singleConatiner: {
        alignItems: 'center',
    },
    steps: {
        backgroundColor: '#FAD008',
        height: 60,
        width: 60,
        borderRadius: 50,

    }
});