import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated, Easing, FlatList, TouchableHighlight } from 'react-native';


export default class Selector extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedText: this.props.defaultValue,
      showMenu: false,
    }

    this.spinValue = new Animated.Value(0)
  }

  _onPressButton(){
    this.setState({
      showMenu: !this.state.showMenu
    });

    this.spinArrow();
  }

  _onSelectOption(option){
    this.setState({
      selectedText: option.item,
      showMenu: false
    });
    this.props.onSelect(option.item);
  }

  spinArrow(){
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue,
      {
        toValue: 1,
        duration: 300,
        easing: Easing.linear
      }
    ).start()
  }

  render(){
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ((this.state.showMenu)? ['0deg', '180deg'] : ['180deg', '0deg'])
    })

    return (
      <View>
        <TouchableHighlight style={styles.container} onPress={() => this._onPressButton()}>

          <View>
            <Text style={styles.buttonText}>{this.state.selectedText}</Text>
              <Animated.View style={ [styles.arrowContainer, {transform: [{rotate: spin}]}] }>
                <View style={styles.arrowDown} />
              </Animated.View>
          </View>
          
        </TouchableHighlight>

        { this.state.showMenu &&
          <FlatList
            style={styles.flatlist}
            data={[...this.props.options]}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Text
                onPress={() => this._onSelectOption({item})}
                style={[styles.flatlistText, this.state.selectedText===item && {backgroundColor: '#eee'}]}>
                {item}
              </Text>
            )}
          />
        }
        

      </View>
      
    )
  }

}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  flatlist: {
    position: 'absolute',
    top: 38,
    left: 0,
    borderWidth: 2,
    borderColor: '#eee',
    borderTopWidth: 0,
    backgroundColor: 'white',
    width: 300,
  },
  flatlistText: {
    fontSize: 18, 
    color: '#444',
    padding: 5,
    flex: 1,
  },
  buttonText: {
    fontSize: 20,
    width: 300,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 5, 
    borderColor: '#aaa', 
    borderWidth: 2,
    justifyContent: 'flex-end'
  },
  arrowContainer: {
    position: "absolute",
    marginLeft: 270,
    marginTop: 16,
    height: 8,
    overflow: 'hidden'
  },
  arrowDown: {
      width: 0,
      height: 0,
      borderWidth: 8,
      borderColor: 'transparent',
      borderTopColor: '#000',
      borderRadius: 4
  }
});