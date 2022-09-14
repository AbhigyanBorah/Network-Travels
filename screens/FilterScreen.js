import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import GeneralHeader from '../components/GeneralHeader';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const FilterScreen = ({navigation}) => {


    return (
        <View style={styles.rootContainer}>
            <GeneralHeader heading={'Filter & sort by'} />

            <View style={{marginLeft: 50, marginTop: 50}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, paddingVertical: 10}}>DEPARTURE TIME</Text>
                <BouncyCheckbox
                    size={20}
                    fillColor="grey"
                    textStyle={{textDecorationLine: "none", fontSize: 15}}
                    text="Before 6 AM"
                    iconStyle={{borderColor: "grey", borderRadius: 0}}
                    innerIconStyle={{borderWidth: 2, borderRadius: 0}}
                    onPress={() => {}}
                    style={{paddingVertical: 10}}
                />
                <BouncyCheckbox
                    size={20}
                    fillColor="grey"
                    textStyle={{textDecorationLine: "none", fontSize: 15}}
                    text="6 AM to 12 PM"
                    iconStyle={{borderColor: "grey", borderRadius: 0}}
                    innerIconStyle={{borderWidth: 2, borderRadius: 0}}
                    onPress={() => {}}
                    style={{paddingVertical: 10}}
                />
                <BouncyCheckbox
                    size={20}
                    fillColor="grey"
                    textStyle={{textDecorationLine: "none", fontSize: 15}}
                    text="12 PM to 6 PM"
                    iconStyle={{borderColor: "grey", borderRadius: 0}}
                    innerIconStyle={{borderWidth: 2, borderRadius: 0}}
                    onPress={() => {}}
                    style={{paddingVertical: 10}}
                />
                <BouncyCheckbox
                    size={20}
                    fillColor="grey"
                    textStyle={{textDecorationLine: "none", fontSize: 15}}
                    text="After 6 PM"
                    iconStyle={{borderColor: "grey", borderRadius: 0}}
                    innerIconStyle={{borderWidth: 2, borderRadius: 0}}
                    onPress={() => {}}
                    style={{paddingVertical: 10}}
                />
            </View>
            <View style={{marginLeft: 50, marginTop: 50}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, paddingVertical: 10}}>BUS TYPES</Text>
                <BouncyCheckbox
                    size={20}
                    fillColor="grey"
                    textStyle={{textDecorationLine: "none", fontSize: 15}}
                    text="AC"
                    iconStyle={{borderColor: "grey", borderRadius: 0}}
                    innerIconStyle={{borderWidth: 2, borderRadius: 0}}
                    onPress={() => {}}
                    style={{paddingVertical: 10}}
                />
                <BouncyCheckbox
                    size={20}
                    fillColor="grey"
                    textStyle={{textDecorationLine: "none", fontSize: 15}}
                    text="NON-AC"
                    iconStyle={{borderColor: "grey", borderRadius: 0}}
                    innerIconStyle={{borderWidth: 2, borderRadius: 0}}
                    onPress={() => {}}
                    style={{paddingVertical: 10}}
                />
                <BouncyCheckbox
                    size={20}
                    fillColor="grey"
                    textStyle={{textDecorationLine: "none", fontSize: 15}}
                    text="SLEEPER AC"
                    iconStyle={{borderColor: "grey", borderRadius: 0}}
                    innerIconStyle={{borderWidth: 2, borderRadius: 0}}
                    onPress={() => {}}
                    style={{paddingVertical: 10}}
                />
                <BouncyCheckbox
                    size={20}
                    fillColor="grey"
                    textStyle={{textDecorationLine: "none", fontSize: 15}}
                    text="SLEEPER NON-AC"
                    iconStyle={{borderColor: "grey", borderRadius: 0}}
                    innerIconStyle={{borderWidth: 2, borderRadius: 0}}
                    onPress={() => {}}
                    style={{paddingVertical: 10}}
                />
            </View>
            <View style={{marginLeft: 50, marginTop: 50}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, paddingVertical: 10}}>ARRIVAL TIME</Text>
                <BouncyCheckbox
                    size={20}
                    fillColor="grey"
                    textStyle={{textDecorationLine: "none", fontSize: 15}}
                    text="Before 6 AM"
                    iconStyle={{borderColor: "grey", borderRadius: 0}}
                    innerIconStyle={{borderWidth: 2, borderRadius: 0}}
                    onPress={() => {}}
                    style={{paddingVertical: 10}}
                />
                <BouncyCheckbox
                    size={20}
                    fillColor="grey"
                    textStyle={{textDecorationLine: "none", fontSize: 15}}
                    text="6 AM to 12 PM"
                    iconStyle={{borderColor: "grey", borderRadius: 0}}
                    innerIconStyle={{borderWidth: 2, borderRadius: 0}}
                    onPress={() => {}}
                    style={{paddingVertical: 10}}
                />
                <BouncyCheckbox
                    size={20}
                    fillColor="grey"
                    textStyle={{textDecorationLine: "none", fontSize: 15}}
                    text="12 PM to 6 PM"
                    iconStyle={{borderColor: "grey", borderRadius: 0}}
                    innerIconStyle={{borderWidth: 2, borderRadius: 0}}
                    onPress={() => {}}
                    style={{paddingVertical: 10}}
                />
                <BouncyCheckbox
                    size={20}
                    fillColor="grey"
                    textStyle={{textDecorationLine: "none", fontSize: 15}}
                    text="After 6 PM"
                    iconStyle={{borderColor: "grey", borderRadius: 0}}
                    innerIconStyle={{borderWidth: 2, borderRadius: 0}}
                    onPress={() => {}}
                    style={{paddingVertical: 10}}
                />
            </View>

            <View style={styles.bottomContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 70}}>
                    <Pressable style={styles.applyContainer} onPress={() => navigation.goBack()}>
                        <Text style={{fontWeight: 'bold'}}>APPLY</Text>
                    </Pressable>
                    <Pressable style={styles.discardContainer} onPress={() => navigation.goBack()}>
                        <Text style={{fontWeight: 'bold', opacity: 0.4}}>DISCARD</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default FilterScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
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
    applyContainer: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 75,
        paddingVertical: 15,
        borderRadius: 50
    },
    discardContainer: {
        paddingHorizontal: 75,
        paddingVertical: 15,
    },
});