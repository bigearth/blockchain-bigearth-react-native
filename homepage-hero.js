import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class HomepageHero extends Component {
	render() {    
    return (
    	<View>
      	<Text>Bitcoin Markets</Text>
        <Text>Market Value: $ per coin</Text>
        <Text> /  coins mined</Text>
        <Text>% of total coins</Text>
        <Text>Market Cap $</Text>
        <Text>Bitcoin Difficulty</Text>
        <Text>Difficulty is a measure of how difficult it is to find a new block below a given target.</Text>
        <Text>Next Difficulty (estimate) change to current</Text> 
        <Text> blocks until difficulty changes</Text>
      </View>
    )
  }
}

export default HomepageHero;
