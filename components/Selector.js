import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, FlatList, TouchableHighlight } from 'react-native';

export default class ImageCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedText: this.props.defaultValue,
      displayMenu: 'none'
    }
  }

  _onPressButton(){
    
  }

  render(){
    return (
      <View>
        <TouchableHighlight style={styles.container} onPress={this._onPressButton}>
          <Text style={styles.buttonText}>{this.state.selectedText}</Text>
        </TouchableHighlight>

        <FlatList
          style={styles.flatlist}
          data={[...this.props.options]}
          renderItem={({item}) => (
            <Text style={[styles.flatlistText, this.state.selectedText===item && {backgroundColor: '#eee'}]}>{item}</Text>
          )}
        />

      </View>
      
    )
  }

}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  flatlist: {
    display: this.state.displayMenu,
    position: 'relative',
    bottom: 15,
    left: 0,
    height: 20,
    overflow: 'scroll',
    flex: 0
  },
  flatlistText: {
    fontSize: 18, 
    color: '#444',
    padding: 5,
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: '#eee',
    flex: 1,
  },
  buttonText: {
    fontSize: 20,
    width: 300,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 5, 
    borderColor: '#aaa', 
    borderWidth: 2
  }
});