import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {
  NavigationContainer
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import OnBording1 from './screens/onBording1';
import OnBording2 from './screens/onBoarding2';
import Registration from './screens/Registration';
import Login from './screens/Login';
import OTPScreen from './screens/OTPScreen';
import BottomNav from './components/BottomNav';
import SideNav from './screens/SideNav';
import BusTypes from './screens/BusTypes';
import FilterScreen from './screens/FilterScreen';
import SeatBooking from './screens/SeatBooking';
import FareDetails from './screens/FareDetails';
import Pickup from './screens/PickupScreen';
import PassengerDetail from './screens/PassengerDetail';
import OrderSummary from './screens/OrderSummary';
import OrderConfirmation from './screens/OrderConfirmation';
import RateReview from './screens/RateReview';
import CancelTicket1 from './screens/CancelTicket1';
import WalletScreen from './screens/WalletScreen';

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
          <Stack.Screen name="BusTypes" component={BusTypes} options={{headerShown: false, animation: 'default'}} />
          <Stack.Screen name="SeatBooking" component={SeatBooking} options={{headerShown: false, animation: 'default'}} />
          <Stack.Screen name="FareDetails" component={FareDetails} options={{headerShown: false, animation: 'slide_from_bottom'}} />
          <Stack.Screen name="Pickup and drop" component={Pickup} options={{headerShown: false, animation: 'slide_from_right'}} />
          <Stack.Screen name="Passenger detail" component={PassengerDetail} options={{headerShown: false, animation: 'slide_from_right'}} />
          <Stack.Screen name="Order Summary" component={OrderSummary} options={{headerShown: false, animation: 'slide_from_right'}} />
          <Stack.Screen name="Order Confirmation" component={OrderConfirmation} options={{headerShown: false, animation: 'slide_from_right'}} />
          <Stack.Screen name="Rate & review" component={RateReview} options={{headerShown: false, animation: 'slide_from_right'}} />
          <Stack.Screen name="CancelTicket1" component={CancelTicket1} options={{headerShown: false, animation: 'slide_from_right'}} />
          <Stack.Screen name="My wallet" component={WalletScreen} options={{headerShown: false, animation: 'slide_from_right'}} />
          <Stack.Screen name="SideNav" component={SideNav} options={{headerShown: false, animation: 'slide_from_left'}} />
          <Stack.Screen name="BottomNav" component={BottomNav} options={{headerShown: false, animation: 'slide_from_right'}} />
          <Stack.Screen name="Filter" component={FilterScreen} options={{headerShown: false, animation: 'slide_from_bottom'}} />
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
