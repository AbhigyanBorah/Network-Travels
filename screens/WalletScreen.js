import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Collapse, CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import {Ionicons} from '@expo/vector-icons';

import GeneralHeader from '../components/GeneralHeader';

const WalletScreen = () => {
    return (
        <View style={{flex: 1}}>
            <GeneralHeader heading={'My wallet'} />
            <View style={[styles.firstContainer, {marginTop: 50}]}>
                <View style={styles.secondContainer}>
                    <View style={styles.thirdContainer}>
                        <View style={styles.forthContainer}>
                            <Text style={{fontSize: 40, fontWeight: 'bold', padding: 10}}>₹ 120.00</Text>
                            <Text>Available balance</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{marginTop: 50}}>
                <Collapse>
                    <CollapseHeader>
                        <View style={styles.headerContainer}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>View wallet transactions</Text>
                            <Ionicons name="chevron-down-sharp" size={20} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style={styles.body}>
                            <View style={styles.detailsContainer}>
                                <Text>21-04-21</Text>
                                <Text>Credit</Text>
                                <Text>₹ 100.00</Text>
                            </View>
                            <View style={styles.detailsContainer}>
                                <Text>01-03-21</Text>
                                <Text>Debit</Text>
                                <Text>₹ 420.00</Text>
                            </View>
                            <View style={styles.detailsContainer}>
                                <Text>11-02-21</Text>
                                <Text>Credit</Text>
                                <Text>₹ 120.00</Text>
                            </View>
                            <View style={styles.detailsContainer}>
                                <Text>15-01-21</Text>
                                <Text>Credit</Text>
                                <Text>₹ 100.00</Text>
                            </View>
                        </View>
                    </CollapseBody>
                </Collapse>
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
    },
    headerContainer: {
        backgroundColor: 'rgba(250, 208, 8, 0.15)',
        borderColor: '#FAD008',
        borderWidth: 1.5,
        borderRadius: 10,
        marginHorizontal: 30,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    body: {
        borderColor: '#FAD008',
        borderTopWidth: 0,
        borderWidth: 1.5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginHorizontal: 30,
        padding: 20,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    }
});