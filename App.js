import React, {Component} from 'react';
import axios from 'axios';
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

  getNasaImages(){
    axios
    .get(`https://images-api.nasa.gov/search?q=mars&media_type=image`)
    .then(response => {
      let images_data = [...response.data.collection.items];
      let mars_images = [], nasa_id = '', image_uri = '';

      for (let index = 0; index < 10; index++) {
        nasa_id = images_data[index].data[0].nasa_id;

        mars_images.push({
          id: nasa_id,
          uri: `https://images-assets.nasa.gov/image/${nasa_id}/${nasa_id}~orig.jpg`,
          description: images_data[index].data[0].description
        });
      }

      this.setState({
        isDataAvailable: true,
        mars: [...mars_images]
      });
      
    })
    .catch(e => console.log('ERROR: ', e))
  }


  render() {
    if (!this.state.isDataAvailable){
      this.getNasaImages();
    } 

    console.log(PlanetImages);
    

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to NASA Native!</Text>
        <PlanetImages welcome='HELLO!'/>
        <ScrollView contentContainerStyle={styles.scrollview}>
          { this.state.isDataAvailable &&
            this.state.mars.map(image => {
              return <Image key={image.id} style={styles.img} source={{uri: image.uri}}/>;
            })
          }
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
