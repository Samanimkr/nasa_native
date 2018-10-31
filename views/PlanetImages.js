import React, {Component} from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import ImageCard from '../components/ImageCard';
import Selector from "../components/Selector";

class PlanetImages extends Component {
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

    static navigationOptions = {
        title: 'Planets'
    }

    getNasaImages(){
        axios
        .get(`https://images-api.nasa.gov/search?q=${this.props.planet}&media_type=image`)
        .then(response => {
            let images_data = [...response.data.collection.items];
            let planet_images = [], nasa_id = '', image_data = '';
            
            for (let index = 0; index < 10; index++) {
                image_data = images_data[index].data[0];
                nasa_id = image_data.nasa_id;

                planet_images.push({
                    id: nasa_id,
                    uri: `https://images-assets.nasa.gov/image/${nasa_id}/${nasa_id}~orig.jpg`,
                    title: image_data.title,
                    date: image_data.date_created.substr(0,10),
                    desc: image_data.description_508
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
                <Text style={styles.title}>Welcome to NASA Native!</Text>

                <View style={{alignItems:'center', position: 'relative', zIndex: 5}}>
                <Selector 
                    // defaultValue="Earth" 
                    options={['Earth', 'Mars','Saturn', 'Jupiter', 'Uranus', 'Neptune', 'Pluto']}
                    // onSelect={(value) => this.setState({planet: value})}
                />
                </View>

                <View style={styles.imagesContainer}>
                    { this.state.isDataAvailable &&
                        <FlatList
                            style={styles.flatlist}
                            keyExtractor={item => item.id }
                            data={this.state.images}
                            renderItem={image => <ImageCard navigation={this.props.navigation} uri={image.item.uri} title={image.item.title} date={image.item.date} desc={image.item.desc} /> }
                        />
                    }
                </View>
            </View>
                
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        planet: state.planet
    }
  }
  
export default connect(mapStateToProps)(PlanetImages);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        flexDirection: 'column',
        backgroundColor: '#fff',
        flex: 1,
    },
    title: {
        color: '#000',
        fontSize: 22,
        textAlign: 'center',
        margin: 10
      },
    imagesContainer: {
        backgroundColor: '#f3f3f3',
        flex: 1
    },  
    flatlist: {
        paddingTop: 10,
        paddingHorizontal: 24,
        flex: 1
    }
  });
  