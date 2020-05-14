import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux';




class DeckView extends Component{  
    render(){
        const  deck  = this.props.route.params.postId;
        const { decks } = this.props
		const questions = decks[deck].questions
        

        return(
            <View style={styles.container}>
                <Text> {decks[deck].title} </Text>
                <Text> {decks[deck].questions.length} </Text>
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
