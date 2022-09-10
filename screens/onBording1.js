import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';

const OnBording1 = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.skipContainer}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.dash}></View>
                    <View style={styles.circle}></View>
                </View>
                <Pressable onPress={() => navigation.navigate('BottomNav')}><Text style={styles.skipText}>Skip</Text></Pressable>
            </View>
            <Image source={require('../assets/OnBoard1.png')} style={styles.mainImage} />
            <View style={styles.textContainer}>
                <Text style={{fontWeight: 'bold', fontSize: 28}}>Move</Text>
                <Text style={{fontSize: 22}}>with us.</Text>
            </View>
            <Text style={styles.subText}>Buy bus tickets easily. You choose the destination and we make the rest.</Text>
            <Pressable style={styles.nextCont} onPress={() => navigation.navigate('OnBoarding2')}>
                <Image source={require('../assets/onBoardArrow.png')} style={{width: 200, height: 200}} />
            </Pressable>
            <View style={styles.curve} >
                <Image source={require('../assets/bottomCurve.png')} style={styles.curveImg} />
            </View>
        </View>
    );
};

export default OnBording1;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    skipContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginTop: 80
    },
    skipText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    dash: {
        backgroundColor: '#373737',
        width: 40,
        height: 5,
        borderRadius: 10
    },
    circle: {
        backgroundColor: '#373737',
        marginLeft: 3,
        width: 5,
        height: 5,
        borderRadius: 10,
        opacity: 0.5
    },
    mainImage: {
        marginTop: 30,
        width: 380,
        height: 380,
        resizeMode: 'contain'
    },
    curve: {
        position: 'absolute',
        bottom: -20,
        width: '100%',
    },
    curveImg: {
        width: '100%',
        height: 250,
        zIndex: -1
    },
    nextCont: {
        marginBottom: 125,
    },
    textContainer: {
        width: '80%',
        marginTop: 70,
        marginLeft: 30
    },
    subText: {
        marginTop: 20,
        width: '75%',
        fontSize: 16,
        opacity: 0.5,
        letterSpacing: 1
    }
});