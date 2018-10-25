import React, {Component} from 'react';
import { StyleSheet, Text, View, Image ,ScrollView } from 'react-native';


// Component Imports
import { PlanetImages } from './components/PlanetImages';



export default class App extends Component {
  constructor(){
    super();

    this.state = {
      isDataAvailable: false,
      earth: [{
        id: '',
        uri: '',
        description: ''
      }],
      mars: [{
        id: '',
        uri: '',
        description: ''
      }],
    }
  }


  render() {
    console.log('hello');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to NASA Native!</Text>
        <PlanetImages planet='earth'/>
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
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  img: {
    flex: 1,
    width: 300,
    height: 230,
    marginTop: 15
  }
});
