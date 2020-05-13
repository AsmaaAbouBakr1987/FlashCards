import React, { Component } from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import {getData} from '../utils/api'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class DeckList extends Component{
    render(){
        const decks= getData()
        return(
            <View style={styles.container}>
                {Object.keys(decks).map((deck)=>{
                    const {title , questions} = decks[deck]
                    return (
                        <View key={deck}>
                            <Text>{title}</Text>
                            <Text>{questions.length}</Text>

                            <Button
                                title="View Deck"
                                onPress={() => this.props.navigation.navigate('DeckView', {entryId : deck})}
                            />
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

export default DeckList