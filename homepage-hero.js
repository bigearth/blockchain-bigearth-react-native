import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    	<View style={[styles.header]}>
    	  <View style={[styles.header, styles.panel, styles.priceContainer]}>
          <Text style={[styles.headerBase, styles.headerTitle]}><Icon name="btc" size={20} /> Bitcoin</Text>
          <Text style={[styles.headerBase, styles.price]}>${this.state.value}</Text>
        </View>
    	  <View style={[styles.header, styles.panel]}>
          <Text style={[styles.headerBase, styles.headerTitle]}><Icon name="link" size={20} /> Bitcoin <Text style={styles.headerSubtitle}>Difficulty</Text></Text>
          <Text style={[styles.headerBase]}>{this.state.difficulty}</Text>
          <Text style={[styles.headerBase]}>Difficulty is a measure of how difficult it is to find a new block below a given target.</Text>
        </View>
    	  <View style={[styles.header, styles.panel]}>
          <Text style={[styles.headerBase, styles.headerTitle]}><Icon name="signal" size={20} /> Next <Text style={styles.headerSubtitle}>Difficulty</Text> (estimate)</Text>
          <Text style={[styles.headerBase]}>{this.state.next_difficulty}</Text>
          <Text style={[styles.headerBase]}><Text style={[styles.next_difficulty_perc]}>+{this.state.next_difficulty_perc}%</Text> change to current</Text> 
          <Text style={[styles.headerBase]}>{this.state.retarget_in} blocks until difficulty changes</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0F5288',
    padding: 5
  },
  priceContainer: {
    alignItems: 'center'
  },
  price: {
    fontSize: 65,
    fontWeight: '500'
  },
  headerBase: {
    paddingTop: 10,
    fontWeight: '200',
    fontSize: 12
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  headerSubtitle: {
    color: '#03233b'
  },
  next_difficulty_perc: {
    backgroundColor: 'green',
    color: 'white'
  },
  panel: {
    backgroundColor: '#eee',
    marginBottom: 5
  }
});

export default HomepageHero;
