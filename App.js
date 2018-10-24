/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View, Image} from 'react-native';



export default class App extends Component {
  constructor(){
    super();

    this.state = {
      image_uri: ''
    }
  }

  getNasaImages(){
    axios
    .get(`https://images-api.nasa.gov/search?q=mars&media_type=image`)
    .then(response => {
      var nasa_id = response.data.collection.items[6].data[0].nasa_id;
      this.setState({
        image_uri: `https://images-assets.nasa.gov/image/${nasa_id}/${nasa_id}~orig.jpg`
      });

      console.log('nasa_id: ', nasa_id);
      // console.log('DATA: ', response.data.collection.items[1])

      // return <Image source={nasa_image} style={styles.img} />
      // return `https://images-assets.nasa.gov/image/${nasa_id}/${nasa_id}~orig.jpg`;
    })
    .catch(e => console.log('ERROR: ', e))
  }


  render() {
    // console.log('asdas', this.getNasaImages());
    // var imageInfo = this.getNasaImages();
    // setTimeout(() => {
    //   console.log('imageInfo', imageInfo);
    // }, 1000);
    this.getNasaImages();

    return (
      <View style={styles.container}>
        <Image style={{width: '70%', height: '50%'}} source={{uri: this.state.image_uri}}/>
        <Text style={styles.welcome}>Welcome to NASA Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  img: {
    width: '80%',
    height: '40%'
  }
});
