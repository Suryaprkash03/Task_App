import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CustomSnackbar = ({ visible, message, actionText, onActionPress }) => {
	if (!visible) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.message}>{message}</Text>
			{actionText && (
				<TouchableOpacity onPress={onActionPress} style={styles.actionButton}>
					<Text style={styles.actionText}>{actionText}</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#566573',
		padding: 8,
		borderRadius: 25,
		flexDirection: 'row',
		alignItems: 'center',
		position: 'absolute',
		bottom: 135,
		left: 12,
		right: 55,
	},
	actionText: {
		color: '#566573',
		fontSize: 27,

	},
});

export default CustomSnackbar;
