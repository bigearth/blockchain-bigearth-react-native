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
      	<Text style={[styles.subBase]}><Icon style={[styles.subBase]} name="th" /> Last 20 <Text style={[styles.subBaseSubtitle]}>Bitcoin</Text> Blocks</Text>
    	  <View style={[styles.container]}>
        	<Text>Height</Text>
        	<Text>Created</Text>
        	<Text>Transactions</Text>
        	<Text>Fee</Text>
        	<Text>Size</Text>
        	<Text>Days Destroyed</Text>
        </View>
        <HomepageBlock />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  sub: {
    backgroundColor: '#579dd8',
    padding: 20
  },
  subBase: {
    color: '#fff',
    fontSize: 17
  },
  subBaseSubtitle: {
    color: '#0F5288',
    fontWeight: 'bold'
  }
});

export default HomepageBlocks;
