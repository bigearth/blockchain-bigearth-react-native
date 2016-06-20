import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import BlocksHero from './blocks-hero.js';
import BlocksSub from './blocks-sub.js';

class Blocks extends Component {
  constructor(props) {
    super(props);
  }
	render() {    
    return (
    	<View>
        <BlocksHero />
        <BlocksSub />
      </View>
    )
  }
}

export default Blocks;
