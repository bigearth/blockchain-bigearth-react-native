import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import style from './style.js'

class BlocksHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nb: 0
    };
    fetch('https://stageblockchain.bigearth.io/blocks/' + this.props.id + '.json')
    .then((response) => response.text())
    .then((responseText) => {
      var data = JSON.parse(responseText);
      this.setState({
        nb: data.data.nb,
        time_utc: data.data.time_utc,
        vout_sum: data.data.vout_sum,
        nb_txs: data.data.nb_txs,
        difficulty: data.data.difficulty,
        fee: data.data.fee,
        hash: data.data.hash,
        version: data.data.version,
        confirmations: data.data.confirmations,
        merkleroot: data.data.merkleroot,
        next_block_hash: data.data.next_block_hash,
        prev_block_hash: data.data.prev_block_hash,
        size: data.data.size,
        days_destroyed: data.data.days_destroyed
      });
    })
    .catch((error) => {
      console.warn(error);
    });
  }
	render() {    
    return (
    	<View style={[style.hero]}>
    	  <View style={[style.homepageHeroPanel, styles.shadow]}>
        	<Text>Bitcoin Block/Height {this.state.nb}</Text>
          <Text>Created {this.state.time_utc}</Text>
          <Text>Trades Sum {this.state.vout_sum}</Text>
          <Text>Transactions {this.state.nb_txs}</Text>
          <Text>Difficulty {this.state.difficulty}</Text>
          <Text>Fee{ this.state.fee}</Text>
          <Text>Hash {this.state.hash}</Text>
          <Text>Version {this.state.version}</Text>
          <Text>Confirmations {this.state.confirmations}</Text>
          <Text>Merkle Root {this.state.merkleroot}</Text>
          <Text>Next Block Hash {this.state.next_block_hash}</Text>
          <Text>Prev Block Hash {this.state.prev_block_hash}</Text>
          <Text>Size {this.state.size}</Text>
          <Text>Days Destroyed {this.state.days_destroyed}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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

export default BlocksHero;
