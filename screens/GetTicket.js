import {StyleSheet, Text, TextInput, View, Pressable} from 'react-native';
import React from 'react';
import GeneralHeader from '../components/GeneralHeader';

const GetTicket = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <GeneralHeader heading={'Get ticket details'} />
            <View style={{flex: 1, justifyContent: 'center'}}>
                <TextInput placeholder='PNR number' style={styles.input} />
                <Pressable android_ripple={{color: '#515151'}} style={styles.button} onPress={() => navigation.navigate('Profile')}>
                    <Text style={{fontWeight: 'bold', color: '#ffffff', textAlign: 'center', fontSize: 20}}>SUBMIT</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default GetTicket;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000000',
        marginHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 10,
        elevation: 5
    },
    input: {
        backgroundColor: '#d8d8d8',
        marginHorizontal: 40,
        padding: 15,
        borderRadius: 10,
        marginBottom: 50,
        marginTop: -90
    }
});