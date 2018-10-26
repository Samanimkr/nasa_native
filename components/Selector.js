import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight } from 'react-native';

export default class ImageCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedText: this.props.defaultValue
    }
  }

  _onPressButton(){
    Alert.alert('HELLO THERE!')
  }

  render(){
    return (
      <View>
        <TouchableHighlight style={styles.container} onPress={this._onPressButton}>
          <Text style={styles.buttonText}>{this.state.selectedText}</Text>
        </TouchableHighlight>
      </View>
      
    )
  }

}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
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