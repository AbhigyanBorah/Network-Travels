import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {Ionicons, AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const SideNav = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <Pressable style={styles.closeButton} onPress={() => navigation.goBack()}>
                <Ionicons name='close-sharp' size={28} />
            </Pressable>

            <Pressable style={styles.loginBlock} onPress={() => navigation.navigate('Registration')}>
                <View>
                    <Ionicons name='person-circle-sharp' size={50} />
                </View>
                <View style={{marginLeft: 30}} >
                    <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 5}}>Login/Sign-up</Text>
                    <Text style={{opacity: 0.5, letterSpacing: .5}}>Login to receive our latest offers</Text>
                </View>
            </Pressable>

            <View style={{height: 2, backgroundColor: '#000000', opacity: 0.3, marginVertical: 25}} />
            <Pressable style={styles.navBlocks} onPress={() => navigation.navigate('Bookings')}>
                <View>
                    <Ionicons name='ios-podium-outline' size={28} style={{marginLeft: 10}} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.screenNames}>Bookings</Text>
                </View>
            </Pressable>
            <Pressable style={styles.navBlocks}>
                <View>
                    <Ionicons name='wallet-outline' size={28} style={{marginLeft: 10}} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.screenNames}>My Wallet</Text>
                </View>
            </Pressable>
            <Pressable style={styles.navBlocks}>
                <View>
                    <Image source={require('../assets/ticket.png')} style={{marginLeft: 15}} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.screenNames}>Get ticket details</Text>
                </View>
            </Pressable>
            <Pressable style={styles.navBlocks}>
                <View>
                    <Image source={require('../assets/cancelTicket.png')} style={{marginLeft: 15}} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.screenNames}>Cancel ticket</Text>
                </View>
            </Pressable>
            <Pressable style={styles.navBlocks} onPress={() => navigation.navigate('Help & Support')}>
                <View>
                    <AntDesign name='customerservice' size={28} style={{marginLeft: 10}} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.screenNames}>Help & support</Text>
                </View>
            </Pressable>
            <Pressable style={styles.navBlocks}>
                <View>
                    <Ionicons name='share-social-outline' size={28} style={{marginLeft: 10}} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.screenNames}>Share</Text>
                </View>
            </Pressable>
            <Pressable style={styles.navBlocks}>
                <View>
                    <Ionicons name='reader-outline' size={28} style={{marginLeft: 10}} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.screenNames}>Terms & support</Text>
                </View>
            </Pressable>
            <Pressable style={styles.navBlocks}>
                <View>
                    <Ionicons name='ios-information-circle-outline' size={28} style={{marginLeft: 10}} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.screenNames}>About us</Text>
                </View>
            </Pressable>
            <View style={{position: 'absolute', bottom: 40, left: 40}}>
                <Text style={{fontWeight: 'bold'}}>v1.2.1</Text>
            </View>
        </View>
    );
};

export default SideNav;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FAD008'
    },
    closeButton: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        left: 10,
        top: 70,
    },
    loginBlock: {
        marginTop: 130,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: '89%',
        paddingVertical: 10,
        paddingLeft: 25,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'center'
    },
    navBlocks: {
        marginBottom: 15,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: '89%',
        paddingVertical: 18,
        paddingLeft: 25,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'center',
        elevation: 3
    },
    textContainer: {
        marginLeft: 40
    },
    screenNames: {
        fontWeight: 'bold',
        fontSize: 16
    }
});