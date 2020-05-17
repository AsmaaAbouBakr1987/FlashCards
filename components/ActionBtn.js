import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function ActionBtn({ onPress, styles, text, color }){
	return (
		<TouchableOpacity onPress={onPress}
						  style={[styles.iosBtn, { backgroundColor: color }]}>
			<Text style={styles.submitBtnText}>{text}</Text>
		</TouchableOpacity>
	)
}