import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ImageCard extends Component {
  constructor(){
    super();
  }


  render() {
    return (
      <View>
        <Text style={styles.title}>{this.props.title}</Text>
        <Image style={styles.img} source={{uri: this.props.uri}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  },
  img: {
    flex: 1,
    width: 350,
    height: 260,
    marginBottom: 15
  }
});
