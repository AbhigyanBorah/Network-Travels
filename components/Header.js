import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.toFromContainer}>
                <Pressable android_ripple={{color: '#d9b605'}}><Ionicons name='arrow-back-outline' size={30} /></Pressable>
                <View>
                    <Text style={styles.secondaryText}>From</Text>
                    <Text style={styles.primaryText}>Guwahati</Text>
                    <Text style={styles.secondaryText}>Departure date</Text>
                    <Text style={styles.primaryText}>21-04-21</Text>
                </View>
                <View>
                    <Text style={styles.secondaryText}>To</Text>
                    <Text style={styles.primaryText}>Jorhat</Text>
                    <Text style={styles.secondaryText}>Return date</Text>
                    <Text style={styles.primaryText}></Text>
                </View>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAD008',
        height: 150,
        justifyContent: 'center',
        paddingTop: 40,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 10,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    toFromContainer: {
        flexDirection: 'row',
        width: 300,
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    primaryText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5
    },
    secondaryText: {
        fontSize: 11,
    }
});