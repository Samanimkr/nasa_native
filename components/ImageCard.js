import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ImageCard extends Component {
  constructor(){
    super();
  }


  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Image style={styles.img} source={{uri: this.props.uri}}/>
        <Text style={styles.date}>Date created: {this.props.date}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#eee', 
    borderWidth: 2,
    marginBottom: 25
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  img: {
    flex: 0.8,
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
