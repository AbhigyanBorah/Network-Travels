import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RestStop = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.restStopText}>Rest-Stop</Text>
            <View style={styles.stopContainer}>
                <View style={styles.stoppageContainer}>
                    <Text style={styles.stoppageText}>Jakhalabanda</Text>
                </View>
                <View style={styles.facilitiesContainer}>
                    <View style={styles.facility}>
                        <Image source={require('../assets/safety-1.png')} style={styles.facilityLogo} />
                        <Text style={styles.facilityText}>Safety</Text>
                    </View>
                    <View style={styles.facility}>
                        <Image source={require('../assets/hygiene-1.png')} style={styles.facilityLogo} />
                        <Text style={styles.facilityText}>Hygiene</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default RestStop;

const styles = StyleSheet.create({
    mainContainer: {
        padding: 30
    },
    restStopText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10
    },
    stopContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: '#FAD008',
        borderWidth: 2.5,
        backgroundColor: 'rgba(250, 208, 8, 0.15)',
        borderRadius: 10,
    },
    facilitiesContainer: {
        flexDirection: 'row'
    },
    stoppageContainer: {
        marginHorizontal: 10
    },
    stoppageText: {
        fontSize: 15,
        fontWeight: '600'
    },
    facility: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        margin: 5,
        borderRadius: 10,
        shadowColor: '#888888',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 2
    },
    facilityLogo: {
        height: 25,
        width: 22,
        margin: 10
    },
    facilityText: {
        fontWeight: '300',
        paddingRight: 15
    }
});