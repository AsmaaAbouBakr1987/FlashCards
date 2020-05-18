import React, { Component } from 'react'
import {StyleSheet, View, Text,Button, ScrollView} from 'react-native'
import { getDecks} from '../utils/api'
import {connect} from 'react-redux'
import {receiveDecks} from '../actions'
import {orange, white} from '../utils/color'

class DeckList extends Component{
    componentDidMount(){
		getDecks()
		.then(decks => this.props.receiveAllDecks(decks))
	}
    render(){
        const {decks}= this.props
        return(
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {Object.keys(decks).map((deck)=>{
                    const {title , questions} = decks[deck]
                    return (
                        <View key={deck} style={styles.card}>
                            <Text style={styles.cardText}>{title}</Text>
                            <Text style={styles.cardText}>{questions.length} Cards</Text>

                            <Button style={styles.cardBtn}
                                onPress={() => this.props.navigation.navigate('DeckView', {postId: deck})} 
                                title='view deck'>							
							</Button>
                            
                        </View>
                    )
                })}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
		alignSelf: 'stretch',
		padding: 5,
    },
	card: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: orange,
		margin: 8,
		height: 200,
		borderRadius: 10,
		shadowColor: 'rgba(0,0,0,0.34)',
		 shadowOffset: {
		 	width: 0,
		 	height: 3,
		 },
		 shadowRadius: 4,
		 shadowOpacity: 1
	},
	cardText: {
		fontSize: 30,
		color: white
	},
	cardBtn: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
  });

function mapStateToProps(decks){
    return {
        decks
    }
} 
function mapDispatchToProps(dispatch){
	return {
		receiveAllDecks: (decks) => dispatch(receiveDecks(decks))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(DeckList)