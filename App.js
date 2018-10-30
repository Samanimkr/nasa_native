import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation";

//Redux imports
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./redux/configureStore";

// Component Imports
import PlanetImages from './views/PlanetImages';
import Selector from "./components/Selector";

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      planet: 'earth'
    }
  }

  // static navigationOptions = {
  //   header: null
  // }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>


          <View style={styles.container}>
            <Text style={styles.title}>Welcome to NASA Native!</Text>

            <View style={{alignItems:'center', position: 'relative', zIndex: 5}}>
              <Selector 
                // defaultValue="Earth" 
                options={['Earth', 'Mars','Saturn', 'Jupiter', 'Uranus', 'Neptune', 'Pluto']}
                // onSelect={(value) => this.setState({planet: value})}
              />
            </View>
            
            <PlanetImages planet={this.state.planet}/>
          </View>

          
        </PersistGate>
      </Provider>

    );
  }
}

// export default createStackNavigator({
//   Home: App,
//   PlanetImages: PlanetImages,
//   Modal: ImageModal
// });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    flexDirection: 'column',
    backgroundColor: 'white'
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
