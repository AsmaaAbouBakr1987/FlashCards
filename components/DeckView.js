import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native'


class DeckView extends Component{
   
    render(){
        return(
            <View style={styles.container}>
                <Text> DeckView </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
	
})


export default DeckView
