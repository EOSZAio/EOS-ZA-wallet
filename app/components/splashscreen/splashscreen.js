import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Splashscreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: this.props.message
        }
    }

    static defaultProps = {
        message: 'Hello world!'
    }

  render(){
    return(
      <View>
        <Text>{this.state.message}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Splashscreen', () => Splashscreen);
