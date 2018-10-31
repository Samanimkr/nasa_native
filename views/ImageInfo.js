import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Modal, Dimensions, Button } from 'react-native';

export default class ImageModal extends Component {
  static navigationOptions = {
    title: 'Image Title',
  }

  render() {
    return (
      <View style={{paddingTop: 36}}>
        <TouchableHighlight
            onPress={() => this.props.navigation.goBack()}>
            <Text> &lt; Hide Modal</Text>
        </TouchableHighlight>

        <View style={{ height: Dimensions.get('window').height*0.9, overflow: 'scroll'}}>
          <Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>
          <Image style={styles.img} onPress={this.onCardPress} source={{uri: this.props.uri}}/>
          <Text style={styles.date}>Date created: {this.props.date}</Text>
          <Text style={styles.desc} numberOfLines={3}>Description: {this.props.desc}</Text> 
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#444',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  img: {
    flex: 1
  },
  date: {
    fontSize: 14,
    color: '#bbb',
    padding: 5
  },
  desc: {
    padding: 5,
    fontSize: 14,
    color: '#444',
  }
});
