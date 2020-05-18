import React, {Component} from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { connect } from 'react-redux';
import {red, purple, white,orange} from '../utils/color'
import ActionBtn from './ActionBtn'



class DeckView extends Component{  
    render(){
        const  deck  = this.props.route.params.postId;
        const { decks } = this.props
		
        

        return(
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.mainText}> {decks[deck].title} </Text>
                    <Text style={styles.subText}> {decks[deck].questions.length} </Text>
                

                    <ActionBtn styles={styles} text={'Add Card'} color={purple}
                        onPress={() => this.props.navigation.navigate('AddCard', { postId: deck })}/>

                    <ActionBtn styles={styles} text="Start Quiz" color={red} 
                        onPress={() => this.props.navigation.navigate('Quiz', { postId: deck })}/>

                </View>
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
	iosBtn: {
		padding: 10,
		borderRadius: 7,
		height: 45,
		margin: 5,
		width: 170
	},
	submitBtnText: {
		color: white,
		fontSize: 22,
		textAlign: 'center'
	},
		card: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		backgroundColor: orange,
		alignSelf: 'stretch',
		borderRadius: 10,
		shadowColor: 'rgba(0,0,0,0.34)',
        shadowOffset: {
        width: 0,
        height: 3
      },
        shadowRadius: 4,
        shadowOpacity: 1
	},
	mainText: {
		fontSize: 40,
		color: white
	},
	subText: {
		fontSize: 30,
		color: white,
		marginBottom: 160
	}
})

function mapStateToProps(decks){
	return {
		decks
	}
}
export default connect(mapStateToProps)(DeckView)
