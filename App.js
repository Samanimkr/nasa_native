import React, {Component} from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';


// Component Imports
import { PlanetImages } from './components/PlanetImages';
import ModalDropdown from 'react-native-modal-dropdown';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      planet: 'earth'
    }
  }


  render() {
    console.log('render!');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to NASA Native!</Text>

        <ModalDropdown 
          style={{width: 250, padding: 5, backgroundColor: '#f5f5f5', borderRadius: 5, borderColor: '#eee', borderWidth: 2}}
          textStyle={{fontSize: 18, color: '#444', margin: 0, padding: 0}}
          dropdownStyle={{width: 235, flex: 1}}
          dropdownTextStyle={{fontSize: 16}}
          defaultValue='Earth'
          animated
          options={['Earth', 'Mars','Saturn', 'Jupiter', 'Uranus']}
          onSelect={(index, value) => this.setState({
            planet: value
          })}
        />

        <PlanetImages planet={this.state.planet}/>
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
