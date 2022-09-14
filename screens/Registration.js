import {StyleSheet, Text, View, TextInput, Pressable, Image, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {Ionicons} from '@expo/vector-icons';

// const windowWidth = Dimensions.get('window').width;
// const windowHalf = (windowWidth / 2) - 70;

const Registration = ({navigation}) => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');

    const checkEmpty = () => {
        //Check for the Name TextInput
        if (!name.trim()) {
            alert('Please Enter Name');
            return;
        }
        //Check for the Email TextInput
        if (!mobile.trim()) {
            alert('Please Enter Mobile');
            return;
        }

        if (mobile.length !== 10) {
            alert('Mobile number should be of 10 digits');
            return;
        }

        navigation.navigate('OTP');
    };

    return (
        <Pressable style={styles.mainContainer} onPress={() => Keyboard.dismiss()}>
            <Pressable style={styles.skipContainer} onPress={() => navigation.navigate('Home')}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Skip</Text>
                <Ionicons name='chevron-forward-outline' size={20} />
            </Pressable>
            <Image source={require('../assets/NE.png')} style={styles.backImg} />
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Create a new account</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Full Name' onChangeText={
                    (value) => setName(value)
                } />
                <TextInput style={styles.input} placeholder='Mobile Number' keyboardType='number-pad' onChangeText={
                    (value) => setMobile(value)
                } />
                <TextInput style={styles.input} placeholder='Email (optional)' keyboardType='email-address' />
                <Pressable android_ripple={{color: '#515151'}} style={styles.registerButton} onPress={checkEmpty}>
                    <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold', letterSpacing: 1}}>REGISTER</Text>
                </Pressable>
            </View>
            <View style={styles.loginContainer}>
                <Text style={{fontSize: 16}}>Already have an account?</Text><Pressable onPress={() => navigation.navigate('Login')}><Text style={{fontSize: 17, fontWeight: 'bold', marginLeft: 5}}>LOGIN</Text></Pressable>
            </View>
            <View style={styles.signUpContainer}>
                <View style={styles.line}></View>
                <Text style={styles.signUpText}> or sign up with </Text>
                <View style={styles.line}></View>
            </View>
            <Pressable android_ripple={{color: '#e1e1e1'}} style={styles.googleButton}>
                <Image source={require('../assets/googleIcon.png')} />
                <Image source={require('../assets/GoogleText.png')} style={{marginLeft: 15}} />
            </Pressable>

            {/* </ImageBackground> */}
            <Image source={require('../assets/bus.png')} />
        </Pressable>
    );
};

export default Registration;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FAD008',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    backImg: {
        position: 'absolute',
        top: 300,
        width: 390,
        height: 440,
        opacity: 0.15,
        zIndex: -1
    },
    headingContainer: {
        width: '70%',
        marginTop: 80
    },
    heading: {
        fontSize: 36,
        fontWeight: '700',
        letterSpacing: 1
    },
    inputContainer: {
        width: '70%',
        marginTop: 50
    },
    input: {
        backgroundColor: '#ffffff',
        paddingVertical: 12,
        paddingLeft: 18,
        marginBottom: 10,
        borderRadius: 8
    },
    registerButton: {
        backgroundColor: '#000000',
        paddingVertical: 12,
        marginTop: 30,
        alignItems: 'center',
        borderRadius: 8,
        elevation: 5
    },
    loginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -40
    },
    signUpContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        height: 3,
        backgroundColor: '#000000',
        width: '35%'
    },
    signUpText: {
        backgroundColor: '#FAD008',
        textAlign: 'center',
        fontSize: 16,
        paddingHorizontal: 10,
        // position: 'absolute',
        // top: -13
    },
    signUpTextContainer: {
        justifyContent: 'center',
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingVertical: 15,
        width: 200,
        borderRadius: 8,
        elevation: 5,
        marginBottom: 100,
        marginTop: -20
    },
    skipContainer: {
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 5,
        right: 0,
        top: 70,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    }
});