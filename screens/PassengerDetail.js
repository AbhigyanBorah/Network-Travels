import {StyleSheet, Text, TextInput, Switch, View, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {Ionicons} from '@expo/vector-icons';
import GeneralHeader from '../components/GeneralHeader';


const PassengerDetail = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [gender, setGender] = useState('male');
    const [gender2, setGender2] = useState('male');
    const [coupons, setCoupons] = useState('newRide');
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={{flex: 1}}>
            <GeneralHeader heading={'Passenger detail'} />
            <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 100}}>
                <Text style={styles.headingText}>Contact information:</Text>
                <View>
                    <TextInput placeholder='Email address' style={styles.input} />
                    <TextInput placeholder='Mobile number(default)' style={styles.input} keyboardType="numeric" maxLength={10} />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.subText}>Send booking details & updates on Whatsapp</Text>
                    <Switch
                        trackColor={{false: "#fad20882", true: "#FAD008"}}
                        thumbColor={isEnabled ? "#150f02" : "#828080"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <Text style={styles.headingText}>Passenger details:</Text>
                <View style={styles.detailsMainContainer}>
                    <View style={styles.detailsContainerHeader}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 30}}>
                            <Text style={styles.headerSubtext}>From</Text>
                            <Text style={styles.headerSubtext}>Seats</Text>
                            <Text style={styles.headerSubtext}>To</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30}}>
                            <Text style={styles.headerText}>Guwahati</Text>
                            <Text style={styles.headerText}>7(UB),7(LB)</Text>
                            <Text style={styles.headerText}>Jorhat</Text>
                        </View>
                    </View>
                    <View style={{
                        borderBottomColor: '#FAD008',
                        borderBottomWidth: 1.5
                    }}>
                        <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10}}>
                            <TextInput placeholder='Full name' style={styles.nameInput} />
                            <TextInput placeholder='Age' style={styles.ageInput} keyboardType='numeric' maxLength={2} />
                        </View>
                        <View style={{flexDirection: 'row', paddingBottom: 20, marginHorizontal: 20, }}>
                            <Text style={{fontWeight: 'bold'}}>Gender :</Text>
                            <Pressable onPress={() => setGender('male')} style={{flexDirection: 'row', marginRight: 10, alignItems: 'center'}}>
                                <View style={styles.radioButton}>
                                    <View style={[gender === 'male' ? {backgroundColor: '#000000'} : '', styles.innerCircle]}>
                                    </View>
                                </View>
                                <Text>Male</Text>
                            </Pressable>
                            <Pressable onPress={() => setGender('female')} style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={styles.radioButton}>
                                    <View style={[gender === 'male' ? '' : {backgroundColor: '#000000'}, styles.innerCircle]}></View>
                                </View>
                                <Text>Female</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10}}>
                            <TextInput placeholder='Full name' style={styles.nameInput} />
                            <TextInput placeholder='Age' style={styles.ageInput} keyboardType='numeric' maxLength={2} />
                        </View>
                        <View style={{flexDirection: 'row', paddingBottom: 20, marginHorizontal: 20, }}>
                            <Text style={{fontWeight: 'bold'}}>Gender :</Text>
                            <Pressable onPress={() => setGender2('male')} style={{flexDirection: 'row', marginRight: 10, alignItems: 'center'}}>
                                <View style={styles.radioButton}>
                                    <View style={[gender2 === 'male' ? {backgroundColor: '#000000'} : '', styles.innerCircle]}>
                                    </View>
                                </View>
                                <Text>Male</Text>
                            </Pressable>
                            <Pressable onPress={() => setGender2('female')} style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={styles.radioButton}>
                                    <View style={[gender2 === 'male' ? '' : {backgroundColor: '#000000'}, styles.innerCircle]}></View>
                                </View>
                                <Text>Female</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <Text style={styles.headingText}>Coupons:</Text>
                <View style={{marginHorizontal: 30}}>

                    <Pressable onPress={() => setCoupons('newRide')} style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.radioButton}>
                            <View style={[coupons === 'flat50' ? '' : {backgroundColor: '#000000'}, styles.innerCircle]}></View>
                        </View>
                        <Text style={{fontWeight: 'bold'}}>NEWRIDE : Up to Rs 100 OFF on your 1st bus booking.</Text>
                    </Pressable>
                    <Pressable onPress={() => setCoupons('flat50')} style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 20}}>
                        <View style={styles.radioButton}>
                            <View style={[coupons === 'flat50' ? {backgroundColor: '#000000'} : '', styles.innerCircle]}></View>
                        </View>
                        <Text style={{fontWeight: 'bold'}}>FLAT50 : Flat 50% OFF on bookings before 1st May'23</Text>
                    </Pressable>

                </View>
                <View style={styles.applyButtonContainer}>
                    <TextInput style={styles.couponInput} placeholder={'Enter a coupon code'} />
                    <Pressable android_ripple={{color: '#515151'}} style={styles.applyButton}>
                        <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold', letterSpacing: 1}}>APPLY</Text>
                    </Pressable>
                </View>
                <Text style={{marginHorizontal: 30, paddingVertical: 20, fontSize: 15, fontWeight: 'bold'}}>
                    By clicking on next, I agree to all the terms & condition and privacy policy
                </Text>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 70, paddingRight: 10, paddingLeft: 50}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 20}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>₹ 1200.00</Text>
                            <Text>For 2 seats</Text>
                        </View>
                        <Pressable onPress={() => navigation.navigate('FareDetails')}>
                            <Ionicons name='chevron-up-sharp' size={20} style={{backgroundColor: 'white', borderRadius: 50}} />
                        </Pressable>
                    </View>
                    <Pressable onPress={() => navigation.navigate('Order Summary')}>
                        <View style={styles.nextContainer}>
                            <Text style={{fontSize: 20, fontWeight: "bold"}}>NEXT</Text>
                            <Ionicons name='chevron-forward-sharp' size={24} style={{paddingLeft: 10}} />
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default PassengerDetail;

const styles = StyleSheet.create({
    headingText: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingTop: 30,
        paddingBottom: 10,
        marginLeft: 30
    },
    input: {
        backgroundColor: '#e2e2e2',
        paddingVertical: 15,
        marginHorizontal: 30,
        marginBottom: 10,
        borderRadius: 5,
        paddingLeft: 15
    },
    subText: {
        marginHorizontal: 30
    },
    detailsMainContainer: {
        backgroundColor: 'rgba(250, 208, 8, 0.15)',
        marginHorizontal: 30,
        borderRadius: 10,
        borderColor: '#FAD008',
        borderWidth: 1.5
    },
    detailsContainerHeader: {
        backgroundColor: '#FAD008',
        paddingVertical: 20,
        borderRadius: 10
    },
    couponInput: {
        backgroundColor: '#e2e2e2',
        paddingVertical: 15,
        flex: 1,
        marginRight: 20,
        borderRadius: 5,
        paddingLeft: 15
    },
    applyButton: {
        backgroundColor: '#000000',
        paddingVertical: 15,
        paddingHorizontal: 50,
        alignItems: 'center',
        borderRadius: 8,
        elevation: 5
    },
    applyButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 30
    },
    bottomContainer: {
        height: 70,
        position: 'absolute',
        bottom: 16,
        right: 16,
        left: 16,
        borderRadius: 50,
        elevation: 2,
        backgroundColor: '#FAD008',
    },
    nextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingLeft: 40,
        paddingRight: 20,
        borderRadius: 50
    },
    headerSubtext: {
        fontSize: 12,
        opacity: 0.5,
        marginBottom: 5
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 15
    },
    nameInput: {
        borderBottomColor: '#a6a6a6',
        borderBottomWidth: 1.5,
        marginVertical: 10,
        marginHorizontal: 20,
        flex: 4,
        fontWeight: 'bold',
        fontSize: 16
    },
    ageInput: {
        borderBottomColor: '#a6a6a6',
        borderBottomWidth: 1.5,
        marginHorizontal: 30,
        flex: 1,
        fontWeight: 'bold',
        fontSize: 16
    },
    innerCircle: {
        height: 10,
        width: 10,
        margin: 2,
        borderRadius: 50,
        overflow: 'hidden'
    },
    radioButton: {
        height: 18,
        width: 18,
        borderColor: '#000000',
        borderWidth: 2,
        marginHorizontal: 5,
        borderRadius: 50,
        overflow: 'hidden',
    }
});