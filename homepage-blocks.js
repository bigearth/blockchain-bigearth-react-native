import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import HomepageBlock from './homepage-block.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomepageBlocks extends Component {
  constructor(props) {
    super(props);
  }
	render() {    
    return (
    	<View style={[styles.sub]}>
        <Icon style={[styles.subBase]} name="btc" />
      	<Text style={[styles.subBase]}>Last 20 <Text style={[styles.subBaseSubtitle]}>Bitcoin</Text> Blocks</Text>
      	<Text>Height</Text>
      	<Text>Created</Text>
      	<Text>Transactions</Text>
      	<Text>Fee</Text>
      	<Text>Size</Text>
      	<Text>Days Destroyed</Text>
        <HomepageBlock />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sub: {
    backgroundColor: '#579dd8'
  },
  subBase: {
    color: '#fff'
  },
  subBaseSubtitle: {
    color: '#0F5288'
  }
});

export default HomepageBlocks;
