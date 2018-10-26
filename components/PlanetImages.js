import React, {Component} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import axios from 'axios';

import ImageCard from './ImageCard';

export default class PlanetImages extends Component {
    constructor(props){
        super(props);

        this.state = {
            isDataAvailable: false,
            currentPlanet: props.planet,
            images: [{
                key: '',
                uri: '',
                title: '',
                date: '',
                desc: ''
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
                    key: nasa_id,
                    uri: `https://images-assets.nasa.gov/image/${nasa_id}/${nasa_id}~orig.jpg`,
                    title: images_data[index].data[0].title,
                    date: images_data[index].data[0].date_created.substr(0,10),
                    desc: images_data[index].data[0].description_508
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
            <View style={styles.container}>
                { this.state.isDataAvailable &&
                    <FlatList
                        style={styles.flatlist}
                        data={this.state.images}
                        renderItem={image => <ImageCard uri={image.item.uri} title={image.item.title} date={image.item.date} desc={image.item.desc} /> }
                    />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3f3f3',
        flex: 1,
    },
    flatlist: {
        paddingTop: 10,
        paddingHorizontal: 24,
        flex: 1
    }
  });
  