import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Dimensions } from 'react-native';

export default class ImageCard extends Component {
  constructor(){
    super();

    this.state = {

    }
  }

  onCardPress(){
    
  }

  render() {
    return (
      <TouchableHighlight onPress={this.onCardPress} style={{marginBottom: 25}} underlayColor='#fff'>
        <View style={styles.card}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Image style={styles.img} onPress={this.onCardPress} source={{uri: this.props.uri}}/>
          {/* <Text>DESC {this.props.desc}</Text> */}
          <Text style={styles.date}>Date created: {this.props.date}</Text>
        </View>
      </TouchableHighlight> 
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#eee', 
    borderWidth: 2,
    height: 300
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#555',
    paddingVertical: 10
  },
  img: {
    flex: 1,
  },
  date: {
    fontSize: 14,
    color: '#bbb',
    textAlign: 'left',
    padding: 10
  },
});
