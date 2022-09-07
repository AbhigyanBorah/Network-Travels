import {StyleSheet, Text, View, Pressable, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';

import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import HelpScreen from '../screens/HelpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon, {Icons} from './Icons';

const TabArr = [
    {route: 'Home', label: 'Home', component: HomeScreen, iconName: 'home', type: Icons.Octicons, },
    {route: 'Bookings', label: 'Bookings', component: BookingScreen, iconName: 'ios-podium-outline', type: Icons.Ionicons},
    {route: 'Help & Support', label: 'Help & Support', component: HelpScreen, iconName: 'customerservice', type: Icons.AntDesign},
    {route: 'Profile', label: 'Profile', component: ProfileScreen, iconName: 'user', type: Icons.EvilIcons}
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const textViewRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate({0: {scale: 0}, 1: {scale: 1, }});
            textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
        } else {
            viewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
            textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
        }
    }, [focused]);

    return (
        <Pressable onPress={onPress} style={[styles.container, {flex: focused ? 1 : 0.7}]}>
            <View>
                <Animatable.View
                    duration={500}
                    ref={viewRef}
                    style={[StyleSheet.absoluteFillObject, {backgroundColor: '#ffffff', borderRadius: 50}]} />
                <View style={styles.btn}>
                    <Icon type={item.type} name={item.iconName} />
                    <Animatable.View ref={textViewRef}>
                        {focused && <Text style={{
                            paddingHorizontal: 18
                        }}>{item.label}</Text>}
                    </Animatable.View>
                </View>
            </View>
        </Pressable>
    );
};

const BottomNav = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 70,
                position: 'absolute',
                bottom: 16,
                right: 16,
                left: 16,
                borderRadius: 50,
                elevation: 0,
                backgroundColor: '#FAD008'
            }
        }}>
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen name={item.route} component={item.component} key={index} options={{
                        tabBarShowLabel: false,
                        // tabBarLabel: item.label,
                        tabBarIcon: ({color}) => (
                            <Icon type={item.type} name={item.iconName} color='black' />
                        ),
                        tabBarButton: (props) => <TabButton {...props} item={item} />
                    }} />
                );
            })}
        </Tab.Navigator>
    );
};

export default BottomNav;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50
    }
});