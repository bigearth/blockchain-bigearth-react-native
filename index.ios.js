/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';
import Homepage from './homepage.js';
import Blocks from './blocks.js';

class blockchain extends Component {
  renderScene(route, navigator) {
    if(route.name == 'Home') {
      return <Homepage navigator={navigator} {...route.passProps} />
    }
    if(route.name == 'Blocks') {
      return <Blocks navigator={navigator} {...route.passProps} />
    }
  }
  render() {
    return (
      <Navigator style={{ flex:1 }} initialRoute={{ name: 'Home' }} renderScene={ this.renderScene } />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('blockchain', () => blockchain);
