import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GeneralHeader from '../components/GeneralHeader';

const FareDetails = () => {
    return (
        <View style={{flex: 1}}>
            <GeneralHeader heading={'Fare details'} />
            <View style={{justifyContent: 'space-between', flex: 1}}>
                <View>
                    <View style={styles.headerLayout}>
                        <Text style={styles.headers}>Seats</Text>
                        <Text style={styles.headers}>Fare</Text>
                    </View>
                    <View style={styles.commonLayout}>
                        <View>
                            <Text style={styles.normalText}>7 (lower berth)</Text>
                            <Text style={styles.normalText}>7 (upper berth)</Text>
                        </View>
                        <View>
                            <Text style={styles.normalText}>₹ 500.00</Text>
                            <Text style={styles.normalText}>₹ 700.00</Text>
                        </View>
                    </View>
                    <View style={styles.commonLayout}>
                        <Text style={styles.boldText}>Basic fare</Text>
                        <Text style={styles.boldText}>₹ 1200.00</Text>
                    </View>
                    <View style={{backgroundColor: '#c5c5c5', width: '90%', height: 2, marginHorizontal: 20}} />
                    <View style={styles.commonLayout}>
                        <Text style={styles.boldText}>Coupon discount</Text>
                        <Text style={styles.discountText}>₹ -120.00</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.commonLayout}>
                        <Text style={styles.boldText}>Total amount</Text>
                        <Text style={styles.boldText}>₹1080.00</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default FareDetails;

const styles = StyleSheet.create({
    commonLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        paddingVertical: 30
    },
    headerLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        paddingTop: 40
    },
    headers: {
        fontWeight: 'bold',
        fontSize: 20
    },
    normalText: {
        fontSize: 16
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    discountText: {
        color: '#00AA63',
        fontWeight: 'bold',
        fontSize: 18
    }
});