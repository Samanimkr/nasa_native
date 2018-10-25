import React, {Component} from 'react';
import { StyleSheet, Text, View, Image ,ScrollView } from 'react-native';
import axios from 'axios';

export class PlanetImages extends Component {
    constructor(){
        super();

        this.state = {
            isDataAvailable: false,
            images: [{
                id: '',
                uri: '',
                description: ''
            }],
        }
    }

    getNasaImages(){
        axios
        .get(`https://images-api.nasa.gov/search?q=${this.props.planet}&media_type=image`)
        .then(response => {
            let images_data = [...response.data.collection.items];
            let planet_images = [], nasa_id = '', image_uri = '';

            for (let index = 0; index < 10; index++) {
            nasa_id = images_data[index].data[0].nasa_id;

            planet_images.push({
                id: nasa_id,
                uri: `https://images-assets.nasa.gov/image/${nasa_id}/${nasa_id}~orig.jpg`,
                description: images_data[index].data[0].description
            });
            }

            this.setState({
                isDataAvailable: true,
                images: [...planet_images]
            });
            
        })
        .catch(e => console.log('ERROR: ', e))
    }

    render(){
        if (!this.state.isDataAvailable){
            this.getNasaImages();
          } 

        return (
            <ScrollView contentContainerStyle={styles.scrollview}>
                { this.state.isDataAvailable &&
                    this.state.images.map(image => {
                    return <Image key={image.id} style={styles.img} source={{uri: image.uri}}/>;
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollview: {
      flexDirection: 'column',
    },
    img: {
      flex: 1,
      width: 350,
      height: 260,
      marginTop: 15
    }
  });
  