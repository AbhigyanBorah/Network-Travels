import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import GeneralHeader from '../components/GeneralHeader';

const ProfileScreen = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <GeneralHeader heading={'Profile'} />
            <Pressable style={[styles.container, {marginTop: 50}]} onPress={() => navigation.navigate('Registration')}>
                <Text style={{fontWeight: 'bold', paddingVertical: 10, fontSize: 16}}>Login / Sign-up</Text>
                <Text>Login to receive our latest offers</Text>
            </Pressable>
            <Pressable style={styles.container}>
                <Text style={{fontWeight: 'bold', fontSize: 16, }} onPress={() => navigation.navigate('My wallet')}>My wallet</Text>
            </Pressable>
            <Pressable style={styles.container}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Get ticket details</Text>
            </Pressable>
            <Pressable style={styles.container}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Share</Text>
            </Pressable>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(250, 208, 8, 0.15)',
        borderColor: '#FAD008',
        borderWidth: 1.5,
        borderRadius: 10,
        marginHorizontal: 30,
        padding: 20,
        marginBottom: 20
    }
});