import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, FlatList, TouchableHighlight } from 'react-native';

export default class ImageCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedText: this.props.defaultValue,
      showMenu: false
    }

  }

  _onPressButton(){
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render(){
    return (
      <View>
        <TouchableHighlight style={styles.container} onPress={() => this._onPressButton()}>
          <Text style={styles.buttonText}>{this.state.selectedText}</Text>
        </TouchableHighlight>

        { this.state.showMenu &&
          <FlatList
            style={styles.flatlist}
            data={[...this.props.options]}
            renderItem={({item}) => (
              <Text style={[styles.flatlistText, this.state.selectedText===item && {backgroundColor: '#eee'}]}>{item}</Text>
            )}
          />
        }
        

      </View>
      
    )
  }

}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  flatlist: {
    position: 'absolute',
    top: 38,
    left: 0,
    borderWidth: 2,
    borderColor: '#eee',
    borderTopWidth: 0,
    backgroundColor: 'white',
    width: 300,
    zIndex: 3000
  },
  flatlistText: {
    fontSize: 18, 
    color: '#444',
    padding: 5,
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