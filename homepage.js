import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import HomepageHero from './homepage-hero.js';
import HomepageBlocks from './homepage-blocks.js';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      all: 21000000,
      current: 0,
      perc: 0,
      difficulty: 0,
      next_difficulty: 0,
      next_difficulty_perc: 0,
      retarget_in: 0
    };
    fetch('https://stageblockchain.bigearth.io/coin.json')
    .then((response) => response.text())
    .then((responseText) => {
      var data = JSON.parse(responseText);
      console.log(data.data.coin.name);
      this.setState({
        value: data.data.markets.coinbase.value
      });

    })
    .catch((error) => {
      console.warn(error);
    });
  }
  _navigate(name) {
  	this.props.navigator.push({
    	name: 'Blocks',
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
        <Text>Market Value: ${this.state.value} per coin</Text>
        <TouchableHighlight onPress={ () => this._navigate('asdf') }>
          <Text>Go to the block page</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Homepage;
