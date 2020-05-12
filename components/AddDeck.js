import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { addDeck } from '../actions'
import {connect} from 'react-redux'

class AdddDeck extends Component{
    state = {
		text: ''
    }
    submitDeckName = () => {
		const { text } = this.state

		if(this.state.text){
			saveDeckTitle(text)
			this.props.dispatch(addDeck(text))
			this.setState({ text: '' })
		}
	}
    render(){
        return(
            <View style={styles.container}>
                <Text> The new Deck title:</Text>
                <TextInput onChange={(text) => this.setState({text: text})}
                            value={this.state.text}></TextInput>
                <Button onPress={(this.submitDeckName)} title="submit"></Button>
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


export default connect() (AdddDeck)