import React, { Component } from 'react'
import { CommonActions } from '@react-navigation/native';
import { StyleSheet, View, Text, Button, TextInput, KeyboardAvoidingView } from 'react-native'
import { addCardToDeck } from '../utils/api'
import { addCard } from '../actions'
import {connect} from 'react-redux'
import {white, orange} from '../utils/color'

class AddCard extends Component{
    state = {
		question: '',
		answer: '',
		correctAnswer: ''
	}

	submitCard = (deck) => {
		const { question, answer, correctAnswer } = this.state

		if(question && answer){
			this.props.dispatch(addCard({ question, answer, correctAnswer, deck }))
			addCardToDeck(deck, { question, answer, correctAnswer })
			this.setState({ question: '', answer: '', correctAnswer: ''})
			this.props.navigation.dispatch(CommonActions.goBack());
		}
	}
    
    render(){
        const  deckName  = this.props.route.params.postId;
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
				<View style={styles.container}>
					<Text style={styles.title}>What is the question?</Text>
					<TextInput style={styles.input}
							   onChangeText={(question) => this.setState({question})}
							   value={this.state.question}
					></TextInput>

					<Text style={styles.title}>What is the answer?</Text>
					<TextInput style={styles.input}
							   onChangeText={(answer) => this.setState({answer})}
							   value={this.state.answer}
					></TextInput>

					<Text style={styles.title}>Is this true or false?</Text>
					<TextInput style={styles.input}
							   onChangeText={(correctAnswer) => this.setState({correctAnswer})}
							   value={this.state.correctAnswer}>
					</TextInput>

					<Button title="Submit" style={styles.submitBtn} onPress={() => this.submitCard(deckName)}/>

				</View>
			</KeyboardAvoidingView>
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
	Button: {
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


export default connect() (AddCard)