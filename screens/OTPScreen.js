import {StyleSheet, Text, View, TextInput, Pressable, Image, Keyboard} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {Ionicons} from '@expo/vector-icons';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OTPScreen = ({navigation: {goBack}, navigation}) => {
    const [resend, setResend] = useState(false);
    const [time, setTime] = useState(59);
    const timer = useRef();

    function resendFunc() {
        setResend(true);
        timer.current = setInterval(() => {
            setTime((time) => time - 1);
        }, 1000);
    }

    useEffect(() => {
        if (time < 0) {
            setResend(false);
            clearInterval(timer.current);
            setTime(59);
        }
    }, [time]);


    // useEffect(() => {
    //     return () => {
    //         clearInterval(timer.current);
    //     };
    // }, []);


    return (
        <Pressable style={styles.mainContainer} onPress={() => Keyboard.dismiss()}>
            <Pressable style={styles.skipContainer} onPress={() => goBack()}>
                <Ionicons name='chevron-back-outline' size={20} />
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Back</Text>
            </Pressable>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>OTP Verification</Text>
                <View style={styles.subTextContainer}><Text style={styles.subText}>We have sent an OTP to your registered mobile number</Text></View>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.otpInput}>
                    {/* <TextInput style={styles.input} keyboardType='number-pad' maxLength={1} />
                    <TextInput style={styles.input} keyboardType='number-pad' maxLength={1} />
                    <TextInput style={styles.input} keyboardType='number-pad' maxLength={1} />
                    <TextInput style={styles.input} keyboardType='number-pad' maxLength={1} /> */}
                    <OTPInputView autoFocusOnLoad={false} pinCount={4} style={{height: 50, width: '80%'}} codeInputFieldStyle={styles.input} />
                </View>
                <Pressable android_ripple={{color: '#515151'}} style={styles.loginButton} onPress={() => navigation.navigate('BottomNav')}>
                    <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold', letterSpacing: 1}}>VERIFY</Text>
                </Pressable>
                {resend ? <View style={{alignItems: 'center', margin: 10}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold'}}>00:{time < 10 ? `0${time}` : time}</Text>
                </View> :
                    <View style={styles.loginContainer}>
                        <Text style={{fontSize: 16}}>Didn't receive OTP?</Text><Pressable onPress={resendFunc}><Text style={{fontSize: 17, fontWeight: 'bold', marginLeft: 5}}>RESEND</Text></Pressable>
                    </View>}
            </View>

            {/* </ImageBackground> */}
            <Image source={require('../assets/bus.png')} />
        </Pressable>
    );
};

export default OTPScreen;

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
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 36,
        fontWeight: '700',
        letterSpacing: 2
    },
    subTextContainer: {
        width: '70%',
        padding: 5
    },
    subText: {
        textAlign: 'center',
        fontSize: 16
    },
    inputContainer: {
        width: '70%',
        marginVertical: 150
    },
    otpInput: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    input: {
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 8,
        width: 50,
        height: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000000'
    },
    loginButton: {
        backgroundColor: '#000000',
        paddingVertical: 12,
        marginTop: 15,
        alignItems: 'center',
        borderRadius: 8,
        elevation: 5
    },
    loginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
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