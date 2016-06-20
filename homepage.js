import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import HomepageHero from './homepage-hero.js';
import HomepageBlocks from './homepage-blocks.js';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }
  _navigate(name) {
  	this.props.navigator.push({
    	name: 'Home',
      passProps: {
      	name: name
      }
    })
  }
	render() {    
    return (
    	<View>
        <HomepageHero url="https://stageblockchain.bigearth.io/coin.json" />
        <HomepageBlocks url="https://stageblockchain.bigearth.io/blocks/416614,416613,416612,416611,416610,416609,416608,416607,416606,416605,416604,416603,416602,416601,416600,416599,416598,416597,416596,416595.json" />
      </View>
    )
  }
}

export default Homepage;
