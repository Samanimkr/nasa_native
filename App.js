/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View} from 'react-native';



export default class App extends Component {
  constructor(){
    super();

    this.state = {
      images: [{
        id: '',
        uri: '',
      }]
    }
  }

  getNasaImages(api_key){
    axios
    .get(`https://images-api.nasa.gov/search?q=mars&media_type=image`)
    .then(response => {
      console.log('DATA: ', response.data.collection.items)
    })
    .catch(e => console.log('ERROR: ', e))
    return <Text>from here!</Text>
  }
  render() {
    var api_key = 'zCLX10v3Omg8jie4clKmFG7S5UPyKYiMdcZMW32l';
    var hi = this.getNasaImages(api_key);
    return (
      <View style={styles.container}>
        { hi }
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
  }
});
