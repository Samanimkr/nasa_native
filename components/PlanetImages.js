import React, {Component} from 'react';
import { StyleSheet, Text, View, Image ,ScrollView } from 'react-native';
import axios from 'axios';

import ImageCard from './ImageCard';

export default class PlanetImages extends Component {
    constructor(props){
        super(props);

        this.state = {
            isDataAvailable: false,
            currentPlanet: props.planet,
            images: [{
                id: '',
                uri: '',
                title: '',
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
                title: images_data[index].data[0].title,
                description: images_data[index].data[0].description
            });
            }

            this.setState({
                isDataAvailable: true,
                currentPlanet: this.props.planet,
                images: [...planet_images]
            });
            
        })
        .catch(e => console.log('ERROR: ', e))
    }


    render(){
        if (this.props.planet !== this.state.currentPlanet || !this.state.isDataAvailable){
            this.getNasaImages();
        } 

        return (
            <ScrollView contentContainerStyle={styles.scrollview}>
                { this.state.isDataAvailable &&
                    this.state.images.map(image => {
                        return <ImageCard key={image.id} uri={image.uri} title={image.title} description={image.description} />;
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollview: {
      flexDirection: 'column',
    }
  });
  