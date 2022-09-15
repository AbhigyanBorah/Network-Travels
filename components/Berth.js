import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Seat from './Seat';
import {LSEATS, USEAT} from '../data/seatData';
import Sleeper from './Sleeper';

const Berth = ({onPress}) => {

	return (
		<View style={styles.mainContainer}>
			<View style={styles.berthContainer}>
				<Text style={styles.berthText}>Lower Berth</Text>
				<View style={styles.lowerBirthSeatsContainer}>
					<View style={styles.steering}>
						<Image source={require('../assets/iconBus.png')} style={styles.steeringIcon} />
					</View>
					<View style={styles.seats}>
						{LSEATS.map((seat, index) => (
							seat.visible ? <Seat number={seat.number} onPress={onPress} key={index} /> : <View style={styles.invisibleSeat} key={index}></View>

						))}

					</View>
				</View>
			</View>
			<View style={styles.berthContainer}>
				<Text style={styles.berthText}>Upper Berth</Text>
				<View style={styles.lowerBirthSeatsContainer}>
					<View style={styles.upperSteering}></View>
					<View style={styles.beds}>
						{USEAT.map((seat, index) => (
							seat.visible ? <Sleeper number={seat.number} onPress={onPress} key={index} /> : <View style={styles.invisibleBed} key={index}></View>
						))}

					</View>
				</View>
			</View>
		</View>
	);
};

export default Berth;

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '92%',
		marginHorizontal: 20,
		marginVertical: 0
	},
	berthContainer: {
		alignItems: 'center',
	},
	lowerBirthSeatsContainer: {
		borderColor: '#FAD008',
		borderWidth: 2.5,
		backgroundColor: 'rgba(250, 208, 8, 0.15)',
		padding: 3,
		borderRadius: 10,
	},
	berthText: {
		fontWeight: '900',
		marginBottom: 10
	},
	steering: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginBottom: 30,
	},
	steeringIcon: {
		height: 20,
		width: 20
	},
	seats: {
		flexDirection: 'row',
		width: 200,
		flexWrap: 'wrap'
	},
	beds: {
		flexDirection: 'row',
		width: 200,
		flexWrap: 'wrap'
	},
	invisibleSeat: {
		width: 40,
		height: 40,
		margin: 5
	},
	invisibleBed: {
		width: 30,
		height: 40,
		margin: 5
	},
	upperSteering: {
		marginBottom: 50
	}
});