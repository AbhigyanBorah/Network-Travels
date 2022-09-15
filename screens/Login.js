import {StyleSheet, Text, View, TextInput, Pressable, Image, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {Ionicons} from '@expo/vector-icons';

const Login = ({navigation: {goBack}, navigation}) => {

    const [mobile, setMobile] = useState('');

    const checkEmpty = () => {
        //Check for the Name TextInput
        if (!mobile.trim()) {
            alert('Please Enter Mobile Number');
            return;
        } else if (mobile.length !== 10) {
            alert('Mobile number should be of 10 digits');
            return;
        }
        navigation.navigate('OTP');
    };

    return (
        <Pressable style={styles.mainContainer} onPress={() => Keyboard.dismiss()}>
            <Pressable style={styles.skipContainer} onPress={() => goBack()}>
                <Ionicons name='chevron-back-outline' size={20} />
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Back</Text>
            </Pressable>
            <Image source={require('../assets/NE.png')} style={styles.backImg} />
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Welcome to</Text>
                <Image source={require('../assets/NetworkTravelsText2.png')} style={{marginTop: 10, width: 320, height: 30}} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Mobile Number' keyboardType='number-pad' onChangeText={
                    (value) => setMobile(value)
                } />
                <Pressable android_ripple={{color: '#515151'}} style={styles.loginButton} onPress={checkEmpty}>
                    <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold', letterSpacing: 1}}>LOGIN</Text>
                </Pressable>
            </View>

            {/* </ImageBackground> */}
            <Image source={require('../assets/busNew.png')} style={{width: '80%', height: 100, resizeMode: 'contain'}} />
        </Pressable>
    );
};

export default Login;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FAD008',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    backImg: {
        position: 'absolute',
        top: 350,
        width: 390,
        height: 440,
        opacity: 0.15,
        zIndex: -1
    },
    headingContainer: {
        width: '70%',
        marginTop: 40,
    },
    heading: {
        fontSize: 36,
        fontWeight: '700',
        letterSpacing: 1
    },
    inputContainer: {
        width: '70%',
        marginVertical: 150
    },
    input: {
        backgroundColor: '#ffffff',
        paddingVertical: 12,
        paddingLeft: 18,
        marginBottom: 10,
        borderRadius: 8
    },
    loginButton: {
        backgroundColor: '#000000',
        paddingVertical: 12,
        marginTop: 15,
        alignItems: 'center',
        borderRadius: 8,
        elevation: 5
    },
    skipContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 5,
        left: 0,
        top: 70,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    }
});