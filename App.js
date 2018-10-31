import React, {Component} from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { createStackNavigator } from "react-navigation";

//Redux imports
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./redux/configureStore";

// Component Imports
import PlanetImages from './views/PlanetImages';
import ImageModal from './views/ImageInfo';
import Selector from "./components/Selector";

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      planet: 'earth'
    }
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

            <StatusBar barStyle='light-content' />
            < RootStack />
          
        </PersistGate>
      </Provider>

    );
  }
}

const RootStack = createStackNavigator(
  {
    PlanetImages: PlanetImages,
    Modal: ImageModal
  },
  {
    initialRouteName: 'PlanetImages',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#222',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
