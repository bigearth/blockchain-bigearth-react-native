import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Numeral from 'numeral'
import Moment from 'moment'
import style from './style.js'

class BlocksHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nb: 0
    };
    console.log(this.props.id);
    fetch('https://stageblockchain.bigearth.io/blocks/' + this.props.id + '.json')
    .then((response) => response.text())
    .then((responseText) => {
      var data = JSON.parse(responseText);
      console.log(data);
      this.setState({
        nb: numeral(data.data.nb).format('0,0'),
        time_utc: Moment(data.data.time_utc).fromNow(),
        vout_sum: numeral(data.data.vout_sum).format('0,0.00'),
        nb_txs: numeral(data.data.nb_txs).format('0,0'),
        difficulty: numeral(data.data.difficulty).format('0.0a'),
        fee: numeral(data.data.fee).format('0,0.00'),
        confirmations: numeral(data.data.confirmations).format('0,0'),
        size: numeral(data.data.size).format('0 b'),
        days_destroyed: numeral(data.data.days_destroyed).format('0,0')
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
          <Text style={[style.heroTitle]}>Block</Text>
    	    <View style={[style.row]}>
    	      <View style={[style.subPanelBorder]}>
              <Text style={[style.heroDetailsTitle]}>Height</Text>
              <Text style={[style.heroDetailsTitle]}>Created</Text>
              <Text style={[style.heroDetailsTitle]}>Trades Sum</Text>
              <Text style={[style.heroDetailsTitle]}>Transactions</Text>
              <Text style={[style.heroDetailsTitle]}>Difficulty</Text>
              <Text style={[style.heroDetailsTitle]}>Fee</Text>
              <Text style={[style.heroDetailsTitle]}>Confirmations</Text>
              <Text style={[style.heroDetailsTitle]}>Size</Text>
              <Text style={[style.heroDetailsTitle]}>Days Destroyed</Text>
    	      </View>
    	      <View>
              <Text style={[style.heroDetails]}>{this.state.nb}</Text>
              <Text style={[style.heroDetails]}>{this.state.time_utc}</Text>
              <Text style={[style.heroDetails]}>{this.state.vout_sum}</Text>
              <Text style={[style.heroDetails]}>{this.state.nb_txs}</Text>
              <Text style={[style.heroDetails]}>{this.state.difficulty}</Text>
              <Text style={[style.heroDetails]}>{this.state.fee}</Text>
              <Text style={[style.heroDetails]}>{this.state.confirmations}</Text>
              <Text style={[style.heroDetails]}>{this.state.size}</Text>
              <Text style={[style.heroDetails]}>{this.state.days_destroyed}</Text>
    	      </View>
          </View>
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
