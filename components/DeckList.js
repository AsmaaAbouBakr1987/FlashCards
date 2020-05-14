import React, { Component } from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import {getData, getDecks} from '../utils/api'
import {connect} from 'react-redux'
import {receiveDecks} from '../actions'

class DeckList extends Component{
    componentDidMount(){
		getDecks()
		.then(decks => this.props.receiveAllDecks(decks))
	}
    render(){
        const {decks}= this.props
        return(
            <View style={styles.container}>
                {Object.keys(decks).map((deck)=>{
                    const {title , questions} = decks[deck]
                    return (
                        <View key={deck}>
                            <Text>{title}</Text>
                            <Text>{questions.length}</Text>

                            <Button 
                                onPress={() => this.props.navigation.navigate('DeckView', {postId: deck})} 
                                title='view deck'>							
							</Button>
                            
                        </View>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
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