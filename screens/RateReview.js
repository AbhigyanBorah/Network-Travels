import {Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import GeneralHeader from '../components/GeneralHeader';

const RateReview = ({navigation}) => {
    const [rateBooking, setRateBooking] = useState(0);
    const [rateBusQuality, setRateBusQuality] = useState(0);
    const [rateCrew, setRateCrew] = useState(0);
    const [rateStop, setRateStop] = useState(0);

    return (
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <GeneralHeader heading={'Rate & review'} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../assets/review.png')} style={styles.image} />
                <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 10}}>We would like to know how was your experience</Text>
            </View>

            <View>
                <View style={styles.experienceContainer}>
                    <Text>Booking experience</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Pressable onPress={() => setRateBooking(5)}><Image source={require('../assets/angry.png')} style={[rateBooking === 5 ? {backgroundColor: '#f50909'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateBooking(4)}><Image source={require('../assets/sad.png')} style={[rateBooking === 4 ? {backgroundColor: '#f56b09'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateBooking(3)}><Image source={require('../assets/happy.png')} style={[rateBooking === 3 ? {backgroundColor: '#f5a209'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateBooking(2)}><Image source={require('../assets/laugh.png')} style={[rateBooking === 2 ? {backgroundColor: '#ffea00'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateBooking(1)}><Image source={require('../assets/love.png')} style={[rateBooking === 1 ? {backgroundColor: '#54f509'} : '', styles.emoji]} /></Pressable>
                    </View>
                </View>
                <View style={styles.experienceContainer}>
                    <Text>Bus quality</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Pressable onPress={() => setRateBusQuality(5)}><Image source={require('../assets/angry.png')} style={[rateBusQuality === 5 ? {backgroundColor: '#f50909'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateBusQuality(4)}><Image source={require('../assets/sad.png')} style={[rateBusQuality === 4 ? {backgroundColor: '#f56b09'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateBusQuality(3)}><Image source={require('../assets/happy.png')} style={[rateBusQuality === 3 ? {backgroundColor: '#f5a209'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateBusQuality(2)}><Image source={require('../assets/laugh.png')} style={[rateBusQuality === 2 ? {backgroundColor: '#ffea00'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateBusQuality(1)}><Image source={require('../assets/love.png')} style={[rateBusQuality === 1 ? {backgroundColor: '#54f509'} : '', styles.emoji]} /></Pressable>
                    </View>
                </View>
                <View style={styles.experienceContainer}>
                    <Text>Bus crew quality</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Pressable onPress={() => setRateCrew(5)}><Image source={require('../assets/angry.png')} style={[rateCrew === 5 ? {backgroundColor: '#f50909'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateCrew(4)}><Image source={require('../assets/sad.png')} style={[rateCrew === 4 ? {backgroundColor: '#f56b09'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateCrew(3)}><Image source={require('../assets/happy.png')} style={[rateCrew === 3 ? {backgroundColor: '#f5a209'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateCrew(2)}><Image source={require('../assets/laugh.png')} style={[rateCrew === 2 ? {backgroundColor: '#ffea00'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateCrew(1)}><Image source={require('../assets/love.png')} style={[rateCrew === 1 ? {backgroundColor: '#54f509'} : '', styles.emoji]} /></Pressable>
                    </View>
                </View>
                <View style={styles.experienceContainer}>
                    <Text>Rest-stop experience</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Pressable onPress={() => setRateStop(5)}><Image source={require('../assets/angry.png')} style={[rateStop === 5 ? {backgroundColor: '#f50909'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateStop(4)}><Image source={require('../assets/sad.png')} style={[rateStop === 4 ? {backgroundColor: '#f56b09'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateStop(3)}><Image source={require('../assets/happy.png')} style={[rateStop === 3 ? {backgroundColor: '#f5a209'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateStop(2)}><Image source={require('../assets/laugh.png')} style={[rateStop === 2 ? {backgroundColor: '#ffea00'} : '', styles.emoji]} /></Pressable>
                        <Pressable onPress={() => setRateStop(1)}><Image source={require('../assets/love.png')} style={[rateStop === 1 ? {backgroundColor: '#54f509'} : '', styles.emoji]} /></Pressable>
                    </View>
                </View>
            </View>
            <TextInput multiline
                numberOfLines={8} placeholder="Comment if any" style={styles.inputArea} />
            <View style={{justifyContent: 'center'}}>
                <Pressable android_ripple={{color: '#515151'}} style={styles.button} onPress={() => navigation.navigate('Bookings')}>
                    <Text style={{fontWeight: 'bold', color: '#ffffff', textAlign: 'center', fontSize: 20}}>SUBMIT</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default RateReview;

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 250,
        margin: 30
    },
    experienceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginTop: 20,
        alignItems: 'center'
    },
    emoji: {
        height: 30,
        width: 30,
        marginLeft: 15,
        borderRadius: 50
    },
    inputArea: {
        backgroundColor: '#EFEBEB',
        marginHorizontal: 30,
        marginVertical: 40,
        borderRadius: 5,
        textAlignVertical: 'top',
        padding: 20
    },
    button: {
        backgroundColor: '#000000',
        marginHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 10,
        elevation: 5
    }
});