import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Modal } from 'react-native';

import ImageModal from "../views/ImageInfo";

export default class ImageCard extends Component {
  constructor(){
    super();

    this.state = {
      modalVisible: false
    }
  }

  onChangeVisibility(){
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Modal')} style={{marginBottom: 25}} underlayColor='#fff'>
          <View style={styles.card}>
            <Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>
            <Image style={styles.img} onPress={this.onCardPress} source={{uri: this.props.uri}}/>
            <Text style={styles.date}>Date created: {this.props.date}</Text>
          </View>
        </TouchableHighlight>
        
        { this.state.modalVisible &&
          <ImageModal
            animationType="slide"
            transparent={false}
            changeVisibility={() => this.onChangeVisibility()}
            title={this.props.title}
            uri={this.props.uri}
            date={this.props.date}
            desc={this.props.desc}
          />
        }
        
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#eee', 
    borderWidth: 2,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    height: 300
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#444',
    paddingVertical: 10,
    paddingHorizontal: 5,
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
