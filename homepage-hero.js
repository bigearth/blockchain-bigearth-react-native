import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class HomepageHero extends Component {
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
      this.setState({
        data: data.data,
        value: data.data.markets.coinbase.value,
        all: data.data.volume.all,
        current: data.data.volume.current,
        perc: data.data.volume.perc,
        market_cap: data.data.markets.coinbase.value * data.data.volume.current,
        difficulty: data.data.last_block.difficulty,
        next_difficulty: data.data.next_difficulty.difficulty,
        next_difficulty_perc: data.data.next_difficulty.perc,
        retarget_in: data.data.next_difficulty.retarget_in
      });
    })
    .catch((error) => {
      console.warn(error);
    });
  }
	render() {    
    return (
    	<View>
      	<Text>Bitcoin Markets</Text>
        <Text>Market Value: ${this.state.value} per coin</Text>
        <Text>{this.state.current} / {this.state.all}  coins mined</Text>
        <Text>%{this.state.perc} of total coins</Text>
        <Text>Market Cap ${this.state.market_cap}</Text>
        <Text>Bitcoin Difficulty</Text>
        <Text>{this.state.difficulty}</Text>
        <Text>Difficulty is a measure of how difficult it is to find a new block below a given target.</Text>
        <Text>Next Difficulty (estimate) {this.state.next_difficulty}</Text>
        <Text>{this.state.next_difficulty_perc} change to current</Text> 
        <Text>{this.state.retarget_in} blocks until difficulty changes</Text>
      </View>
    )
  }
}

export default HomepageHero;
