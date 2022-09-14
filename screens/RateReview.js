import {Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import GeneralHeader from '../components/GeneralHeader';

const RateReview = ({navigation}) => {
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
                        <Image source={require('../assets/angry.png')} style={styles.emoji} />
                        <Image source={require('../assets/sad.png')} style={styles.emoji} />
                        <Image source={require('../assets/happy.png')} style={styles.emoji} />
                        <Image source={require('../assets/laugh.png')} style={styles.emoji} />
                        <Image source={require('../assets/love.png')} style={styles.emoji} />
                    </View>
                </View>
                <View style={styles.experienceContainer}>
                    <Text>Bus quality</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../assets/angry.png')} style={styles.emoji} />
                        <Image source={require('../assets/sad.png')} style={styles.emoji} />
                        <Image source={require('../assets/happy.png')} style={styles.emoji} />
                        <Image source={require('../assets/laugh.png')} style={styles.emoji} />
                        <Image source={require('../assets/love.png')} style={styles.emoji} />
                    </View>
                </View>
                <View style={styles.experienceContainer}>
                    <Text>Bus crew quality</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../assets/angry.png')} style={styles.emoji} />
                        <Image source={require('../assets/sad.png')} style={styles.emoji} />
                        <Image source={require('../assets/happy.png')} style={styles.emoji} />
                        <Image source={require('../assets/laugh.png')} style={styles.emoji} />
                        <Image source={require('../assets/love.png')} style={styles.emoji} />
                    </View>
                </View>
                <View style={styles.experienceContainer}>
                    <Text>Rest-stop experience</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../assets/angry.png')} style={styles.emoji} />
                        <Image source={require('../assets/sad.png')} style={styles.emoji} />
                        <Image source={require('../assets/happy.png')} style={styles.emoji} />
                        <Image source={require('../assets/laugh.png')} style={styles.emoji} />
                        <Image source={require('../assets/love.png')} style={styles.emoji} />
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
        marginLeft: 15
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