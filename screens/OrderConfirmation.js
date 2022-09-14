import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import GeneralHeader from '../components/GeneralHeader';
import {LinearGradient} from 'expo-linear-gradient';
import ConfirmNetworktravels from '../assets/svgs/confirmNetworktravels';

const OrderConfirmation = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <GeneralHeader heading={'Order Confirmation'} />
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Text>BOOKING ID</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>PNR-1215420</Text>
                </View>
                <View style={styles.bar}>
                    <View style={{backgroundColor: '#ffffff', height: 20, marginHorizontal: 10}}>
                        <LinearGradient colors={['#00000033', 'transparent', '#0000000e']} style={{
                            height: 20,
                            borderRadius: 50,
                            marginHorizontal: -10
                        }} />
                    </View>
                </View>
                <View style={styles.ticketContainer}>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 30}}>
                        <ConfirmNetworktravels />
                    </View>
                    <View>
                        <View style={styles.textContainer}>
                            <Text style={{fontWeight: 'bold'}}>06:00</Text>
                            <Text style={{fontWeight: 'bold'}}>12:45</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={{fontWeight: 'bold'}}>Guwahati</Text>
                            <Text style={{fontWeight: 'bold'}}>Jorhat</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={{fontWeight: 'bold'}}>Sunday, 24 April</Text>
                            <Text style={{fontWeight: 'bold'}}>7(UB), 7(LB)</Text>
                        </View>
                        <View style={styles.amountContainer}>
                            <Text style={{fontWeight: 'bold', fontSize: 16}}>Total amount:</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 16}}>₹ 1200.00</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                        marginTop: 30,
                    }}>
                        <View style={styles.circle} />
                        <View style={styles.dashed} />
                        <View style={styles.circle} />
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20}}>
                        <Pressable android_ripple={{color: '#515151'}} style={styles.downloadButton}>
                            <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold', letterSpacing: 1}}>DOWNLOAD TICKET</Text>
                        </Pressable>
                        <Text style={{paddingTop: 20, fontSize: 10}}>
                            Note: Bus details will be sent 1 hour prior to the departure
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
                <Pressable android_ripple={{color: '#515151'}} style={styles.downloadButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold', letterSpacing: 1}}>DONE</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default OrderConfirmation;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgba(250, 208, 8, 0.15)',
        marginHorizontal: 40,
        marginVertical: 50,
        borderRadius: 10
    },
    headerContainer: {
        backgroundColor: '#FAD008',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 30,
        borderRadius: 10
    },
    bar: {
        marginTop: 30,
        height: 20,
        marginHorizontal: 20,
        borderRadius: 50
    },
    ticketContainer: {
        backgroundColor: '#ffffff',
        marginHorizontal: 30,
        marginBottom: 30,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden'
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginVertical: 10
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginTop: 60
    },
    dashed: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 1,
        borderColor: '#000000',
        opacity: 0.3,
        marginHorizontal: 30,
        flex: 1
    },
    circle: {
        backgroundColor: '#fef8da',
        height: 50,
        width: 50,
        borderRadius: 50,
        marginHorizontal: -25
    },
    downloadButton: {
        backgroundColor: '#000000',
        width: '80%',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 8,
        elevation: 5
    },
});  