import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class ImageModal extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.info.title}`
  });

  render() {
    const info = this.props.navigation.getParam('info');

    console.log('info: ', info);

    return (
      <View>

        <View style={{ height: Dimensions.get('window').height*0.85, overflow: 'scroll'}}>
          <Text style={styles.title} numberOfLines={1}>{info.title}</Text>
          <Image style={styles.img} onPress={this.onCardPress} source={{uri: info.uri}}/>
          <Text style={styles.date}>Date created: {info.date}</Text>
          <Text style={styles.desc} numberOfLines={3}>Description: {info.desc}</Text> 
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
