import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GeneralHeader from '../components/GeneralHeader';

const HelpScreen = () => {
    return (
        <View style={{flex: 1}}>
            <GeneralHeader heading={'Help & Support'} />
        </View>
    );
};

export default HelpScreen;

const styles = StyleSheet.create({});