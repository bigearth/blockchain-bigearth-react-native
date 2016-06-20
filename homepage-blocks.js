import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import HomepageBlock from './homepage-block.js';

class HomepageBlocks extends Component {
	render() {    
    return (
    	<View>
      	<Text>Last 20 Bitcoin Blocks</Text>
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

export default HomepageBlocks;
