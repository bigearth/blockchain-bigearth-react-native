import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Numeral from 'numeral'
import style from './style.js'

class HomepageHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      high: 0,
      low: 0,
      market_cap: 0,
      current: 0,
      difficulty: 0,
      retarget_in: 0
    };
    fetch('https://stageblockchain.bigearth.io/coin.json')
    .then((response) => response.text())
    .then((responseText) => {
      var data = JSON.parse(responseText);
      this.setState({
        value: data.data.markets.coinbase.value,
        high: numeral(data.data.markets.coinbase.daily_change.value).format('0.00 a'),
        low: numeral(data.data.markets.coinbase.daily_change.value).format('0.00 a'),
        current: numeral(data.data.volume.current).format('0.0a'),
        market_cap: numeral(data.data.markets.coinbase.value * data.data.volume.current).format('($ 0.00 a)'),
        difficulty: numeral(data.data.last_block.difficulty).format('0.0a'),
        retarget_in: numeral(data.data.next_difficulty.retarget_in).format('0,0')
      });
    })
    .catch((error) => {
      console.warn(error);
    });
  }
	render() {    
    return (
    	<View style={[style.hero]}>
    	  <View style={[style.heroPanel, styles.shadow]}>
          <Text style={[style.heroTitle]}>Bitcoin</Text>
          <Text style={[styles.price]}>${this.state.value}</Text>
    	    <View style={[style.row]}>
    	      <View style={[style.subPanelBorder]}>
              <Text style={[style.heroDetails]}>High {this.state.high}</Text>
    	      </View>
            <Text style={[style.heroDetails]}>{this.state.low} Low</Text>
          </View>
        </View>
    	  <View style={[style.heroPanel, styles.shadow]}>
    	    <View style={[style.row]}>
    	      <View style={[style.subPanelBorder]}>
              <Text style={[style.heroDetailsTitle]}>Market Cap</Text>
              <Text style={[style.heroDetailsTitle]}>Total BTC</Text>
              <Text style={[style.heroDetailsTitle]}>Hash Rate</Text>
              <Text style={[style.heroDetailsTitle]}>Next Difficulty</Text>
    	      </View>
    	      <View>
              <Text style={[style.heroDetails]}>{this.state.market_cap}</Text>
              <Text style={[style.heroDetails]}>{this.state.current}</Text>
              <Text style={[style.heroDetails]}>{this.state.difficulty}</Text>
              <Text style={[style.heroDetails]}>{this.state.retarget_in}</Text>
    	      </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  price: {
    fontSize: 65,
    fontWeight: '500',
    color: '#444'
  },
  shadow: {
    shadowColor: "#111",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
});

export default HomepageHero;
