import React, {Component} from 'react';
import { StyleSheet, Text, View, Image ,ScrollView } from 'react-native';
import axios from 'axios';

export default class PlanetImages extends Component {
    render(){
        return (
            <h1>{this.props.welcome}</h1>
        )
    }
}