import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AMENITIES} from '../data/amanitiesData';

const Amenities = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.amenitiesText}>Amenities & Photos</Text>
            <Image source={require('../assets/amenities.png')} style={{resizeMode: 'contain', height: 180, width: '100%'}} />
            {/* <View style={styles.innerContainer}>
                <View style={styles.amenities}>
                    {AMENITIES.map((item, index) => (
                        <View style={styles.amenity} key={index}>
                            <View style={styles.iconContainer}>
                                <Image source={item.image} style={styles.icon} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>{item.text}</Text>
                                <Text style={styles.text}>{item.text2}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <View style={styles.busContainer}>
                    <View >
                        <Image source={require('../assets/bus1.png')} style={styles.bus1} />
                    </View>
                    <View>
                        <Image source={require('../assets/bus2.png')} style={styles.busOther} />
                        <Image source={require('../assets/bus3.png')} style={styles.busOther} />
                        <Image source={require('../assets/bus4.png')} style={styles.busOther} />
                    </View>
                </View>
            </View> */}
        </View>
    );
};

export default Amenities;

const styles = StyleSheet.create({
    mainContainer: {
        paddingBottom: 30,
        paddingHorizontal: 30,
    },
    amenitiesText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10
    },
    amenities: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '54%',
        marginLeft: 40
    },
    amenity: {
        backgroundColor: 'rgba(250, 208, 8, 0.15)',
        borderRadius: 10,
        padding: 6,
        margin: 3,
        width: 70,
        alignItems: 'center'
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textContainer: {
        marginTop: 8,
        alignItems: 'center'
    },
    iconContainer: {
        padding: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 12,
        fontWeight: '300',
    },
    busContainer: {
        flexDirection: 'row'
    },
    bus1: {
        height: 216,
        width: 168,
    },
    busOther: {
        height: 65,
        width: 65,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 40
    }
});