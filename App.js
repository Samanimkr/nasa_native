import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


// Component Imports
import PlanetImages from './components/PlanetImages';
import ModalDropdown from 'react-native-modal-dropdown';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      planet: 'earth'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to NASA Native!</Text>

        <ModalDropdown 
          style={styles.dropdown}
          textStyle={{fontSize: 18, color: '#444', margin: 0, padding: 0}}
          dropdownStyle={{width: 285, flex: 1}}
          dropdownTextStyle={{fontSize: 16}}
          defaultValue='Earth'
          animated
          options={['Earth', 'Mars','Saturn', 'Jupiter', 'Uranus', 'Neptune', 'Pluto']}
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
    backgroundColor: '#FCFCFC',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10
  },
  dropdown: {
    width: 300,
    padding: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 5, 
    borderColor: '#aaa', 
    borderWidth: 2
  }
});
