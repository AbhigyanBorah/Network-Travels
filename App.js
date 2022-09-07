import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {
  NavigationContainer
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import OnBording1 from './screens/onBording1';
import OnBording2 from './screens/onBoarding2';
import HomeScreen from './screens/HomeScreen';
import Registration from './screens/Registration';
import Login from './screens/Login';
import OTPScreen from './screens/OTPScreen';
import BottomNav from './components/BottomNav';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false, animation: 'fade'}} />
          <Stack.Screen name="OnBoarding1" component={OnBording1} options={{headerShown: false, animation: 'fade'}} />
          <Stack.Screen name="OnBoarding2" component={OnBording2} options={{headerShown: false, animation: 'none'}} />
          <Stack.Screen name="Registration" component={Registration} options={{headerShown: false, animation: 'fade'}} />
          <Stack.Screen name="Login" component={Login} options={{headerShown: false, animation: 'slide_from_bottom'}} />
          <Stack.Screen name="OTP" component={OTPScreen} options={{headerShown: false, animation: 'default'}} />
          <Stack.Screen name="BottomNav" component={BottomNav} options={{headerShown: false, animation: 'slide_from_right'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
