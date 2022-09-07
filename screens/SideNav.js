import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const SideNav = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <Pressable style={styles.skipContainer} onPress={() => navigation.goBack()}>
                <Ionicons name='close-sharp' size={28} />
            </Pressable>
            <View>

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
    skipContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        left: 10,
        top: 70,
    }
});