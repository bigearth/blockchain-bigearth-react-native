import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class BlocksHero extends Component {
	render() {    
    return (
    	<View>
      	<Text>Bitcoin Block</Text>
        <Text>Height</Text>
        <Text>Created</Text>
        <Text>Trades Sum</Text>
        <Text>Transactions</Text>
        <Text>Difficulty</Text>
        <Text>Fee</Text>
        <Text>Hash</Text>
        <Text>Version</Text>
        <Text>Confirmations</Text>
        <Text>Merkle Root</Text>
        <Text>Next Block Hash</Text>
        <Text>Prev Block Hash</Text>
        <Text>Size</Text>
        <Text>Days Destroyed</Text>
      </View>
    )
  }
}

export default BlocksHero;
