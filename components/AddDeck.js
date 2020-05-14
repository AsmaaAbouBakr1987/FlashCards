import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { addDeck } from '../actions'
import {connect} from 'react-redux'
import {white, orange} from '../utils/color'

class AdddDeck extends Component{
    state = {
		text: ''
    }
    submitDeckName = () => {
		const { text } = this.state

		if(this.state.text){
            {console.log('textInput :' , this.state.text)}
            console.log('texttttt', text)
            saveDeckTitle(text)
			this.props.dispatch(addDeck(text))
            this.props.navigation.navigate('DeckView', { postId: text })
            
            this.setState({ text: '' })
            
            
		}
	}
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}> The new Deck title:</Text>
                <TextInput style={styles.input} onChangeText={(text) => this.setState({text: text})}
                            value={this.state.text}></TextInput>

                
                            
                <Button style={styles.submitBtn} onPress={(this.submitDeckName)} title="submit"></Button>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	submitBtnText: {
		color: white,
		fontSize: 22,
		textAlign: 'center'
	},
	title: {
		fontSize: 30,
		color: '#333',
	},
	submitBtn: {
		borderWidth: 0.5,
		borderColor: '#d6d7da',
		padding: 10,
		backgroundColor: orange,
		borderRadius: 7,
		overflow: 'hidden'
	},
	input: {
		width: 250,
		height: 40,
		padding: 8,
		borderWidth: 1,
		borderColor: '#757575',
		margin: 20,
		borderRadius: 7
	}
	
})


export default connect() (AdddDeck)