import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FilterHeader = () => {


    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={{width: '60%', justifyContent: 'center', alignItems: 'center', paddingVertical: 15}}>
                    <Text style={{fontSize: 28, fontWeight: 'bold'}}>Filter & sort by</Text>
                </View>
            </View>
        </View>
    );
};

export default FilterHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAD008',
        height: 150,
        justifyContent: 'center',
        paddingTop: 40,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 10,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
});