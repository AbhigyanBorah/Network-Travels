import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const JourneyType = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.activeButton}>
                    <Text style={styles.activeText}>One Way</Text>
                </View>
                <View style={styles.inactiveButton}>
                    <Text style={styles.innactiveText}>Return</Text>
                </View>
            </View>
        </View>
    );
};

export default JourneyType;

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 60,
        paddingVertical: 40
    },
    innerContainer: {
        flexDirection: 'row',
        width: '100%',
        borderColor: '#000000',
        borderWidth: 1.2,
        borderRadius: 10
    },
    activeButton: {
        backgroundColor: '#FAD008',
        width: '50%',
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderColor: '#000000',
        borderRightWidth: 1.2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inactiveButton: {
        width: '50%',
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeText: {
        fontWeight: 'bold',
        fontSize: 15
    },
    innactiveText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#969696'
    }
});