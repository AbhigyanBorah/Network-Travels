import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GeneralHeader from '../components/GeneralHeader';

const WalletScreen = () => {
    return (
        <View style={{flex: 1}}>
            <GeneralHeader heading={'My wallet'} />
            <View style={[styles.firstContainer, {marginTop: 50}]}>
                <View style={styles.secondContainer}>
                    <View style={styles.thirdContainer}>
                        <View style={styles.forthContainer}>
                            <Text>₹ 120.00</Text>
                            <Text>Available balance</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default WalletScreen;

const styles = StyleSheet.create({
    firstContainer: {
        backgroundColor: 'rgba(250, 208, 8, 0.15)',
        borderColor: '#FAD008',
        borderWidth: 1.5,
        borderRadius: 20,
        marginHorizontal: 80,
        height: 180,
        position: 'relative',
        justifyContent: 'flex-end'
    },
    secondContainer: {
        backgroundColor: 'rgba(250, 208, 8, 0.15)',
        borderColor: '#FAD008',
        borderWidth: 1.5,
        borderRadius: 20,
        height: '95%',
        justifyContent: 'flex-end'
    },
    thirdContainer: {
        backgroundColor: 'rgba(250, 208, 8, 0.15)',
        borderColor: '#FAD008',
        borderWidth: 1.5,
        borderRadius: 20,
        height: '95%',
        justifyContent: 'flex-end'
    },
    forthContainer: {
        backgroundColor: '#FAD008',
        borderRadius: 20,
        height: '95%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});