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
        high: numeral(data.data.markets.coinbase.daily_change.value).format('0.00 a'),
        low: numeral(data.data.markets.coinbase.daily_change.value).format('0.00 a'),
        all: data.data.volume.all,
        current: numeral(data.data.volume.current).format('0.0a'),
        perc: data.data.volume.perc,
        market_cap: numeral(data.data.markets.coinbase.value * data.data.volume.current).format('($ 0.00 a)'),
        difficulty: numeral(data.data.last_block.difficulty).format('0.0a'),
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
    	<View style={[style.hero]}>
    	  <View style={[style.panel, style.center]}>
          <Text style={[styles.headerBase, styles.headerTitle, style.bold]}><Icon name="btc" size={20} /> Bitcoin</Text>
          <Text style={[styles.headerBase, styles.price]}>${this.state.value}</Text>
    	    <View style={[style.row]}>
    	      <View style={[styles.priceSubPanelFirstItem]}>
              <Text style={[styles.priceSubPanelItem]}>High {this.state.high}</Text>
    	      </View>
            <Text style={[styles.priceSubPanelItem]}>{this.state.low} Low</Text>
          </View>
        </View>
    	  <View style={[style.panel, style.center]}>
    	    <View style={[style.row]}>
    	      <View style={[styles.priceSubPanelFirstItem]}>
              <Text style={[style.bold, style.right, styles.priceSubPanelItem]}>Market Cap</Text>
              <Text style={[style.bold, style.right, styles.priceSubPanelItem]}>Total BTC</Text>
              <Text style={[style.bold, style.right, styles.priceSubPanelItem]}>Hash Rate</Text>
              <Text style={[style.bold, style.right, styles.priceSubPanelItem]}>Next Difficulty</Text>
    	      </View>
    	      <View style={[]}>
              <Text style={[styles.priceSubPanelItem]}>{this.state.market_cap}</Text>
              <Text style={[styles.priceSubPanelItem]}>{this.state.current}</Text>
              <Text style={[styles.priceSubPanelItem]}>{this.state.difficulty}</Text>
              <Text style={[styles.priceSubPanelItem]}>{this.state.retarget_in}</Text>
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
    fontWeight: '500'
  },
  priceSubPanelFirstItem: {
    borderRightWidth: 1,
    borderRightColor: '#000',
    borderStyle: 'solid'
  },
  priceSubPanelItem: {
    padding: 10
  },
  headerBase: {
    paddingTop: 10,
    fontWeight: '200',
    fontSize: 12
  },
  headerTitle: {
    fontSize: 20
  }
});

export default HomepageHero;
