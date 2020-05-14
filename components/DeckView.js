import React, {Component} from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { connect } from 'react-redux';
import {red, purple} from '../utils/color'




class DeckView extends Component{  
    render(){
        const  deck  = this.props.route.params.postId;
        const { decks } = this.props
		
        

        return(
            <View style={styles.container}>
                <Text> {decks[deck].title} </Text>
                <Text> {decks[deck].questions.length} </Text>


                <Button styles={styles} title="Add Card" color={purple}
		        		onPress={() => this.props.navigation.navigate('AddCard', { postId: deck })}/>

                <Button styles={styles} title="Start Quiz" color={red} 
                    onPress={() => this.props.navigation.navigate('Quiz', { postId: deck })}/>
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

function mapStateToProps(decks){
	return {
		decks
	}
}
export default connect(mapStateToProps)(DeckView)
