/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View, Image ,ScrollView} from 'react-native';



export default class App extends Component {
  constructor(){
    super();

    this.state = {
      earth: [],
      mars: [],
      saturn: []
    }
  }

  getNasaImages(){
    axios
    .get(`https://images-api.nasa.gov/search?q=mars&media_type=image`)
    .then(response => {
      console.log('response: ', response);
      var nasa_id = response.data.collection.items[6].data[0].nasa_id;
      this.setState({
        image_uri: `https://images-assets.nasa.gov/image/${nasa_id}/${nasa_id}~orig.jpg`
      });

      console.log('nasa_id: ', nasa_id);
      // console.log('DATA: ', response.data.collection.items[1])
    })
    .catch(e => console.log('ERROR: ', e))
  }


  render() {
    // console.log('asdas', this.getNasaImages());
    // var imageInfo = this.getNasaImages();
    // setTimeout(() => {
    //   console.log('imageInfo', imageInfo);
    // }, 1000);
    if (!this.state.image_uri){
      this.getNasaImages();
    }
    

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to NASA Native!</Text>
        <ScrollView contentContainerStyle={styles.scrollview}>
          <Image style={styles.img} source={{uri: this.state.image_uri}}/>
          <Image style={styles.img} source={{uri: this.state.image_uri}}/>
          <Image style={styles.img} source={{uri: this.state.image_uri}}/>
          <Image style={styles.img} source={{uri: this.state.image_uri}}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollview: {
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  img: {
    flex: 1,
    width: 250,
    height: 200,
    marginTop: 15
  }
});
