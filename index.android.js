/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Navigator,
  StyleSheet,
  View
} from 'react-native';
import Homepage from './homepage.js';
import Blocks from './blocks.js';

class Blockchain extends Component {
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
      <Navigator style={[styles.container]} initialRoute={{ name: 'Home' }} renderScene={ this.renderScene } />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


AppRegistry.registerComponent('blockchain', () => Blockchain);
