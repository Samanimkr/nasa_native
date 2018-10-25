import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

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
        <View style={styles.card} onPress={this.onCardPress}>
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
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#eee', 
    borderWidth: 2
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#555'
  },
  img: {
    height: 350,
    marginBottom: 10
  },
  date: {
    fontSize: 14,
    color: '#bbb',
    textAlign: 'left',
    marginBottom: 10,
    marginLeft: 10
  },
});
