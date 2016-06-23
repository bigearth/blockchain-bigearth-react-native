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
    fetch('https://stageblockchain.bigearth.io/blocks/' + this.props.id + '.json')
    .then((response) => response.text())
    .then((responseText) => {
      var data = JSON.parse(responseText);
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
    	  <View style={[style.homepageHeroPanel, styles.shadow]}>
          <Text style={[style.homepageHeroTitle]}>Block</Text>
    	    <View style={[style.row]}>
    	      <View style={[styles.subPanelBorder]}>
              <Text style={[style.homepageHeroDetailsTitle]}>Height</Text>
              <Text style={[style.homepageHeroDetailsTitle]}>Created</Text>
              <Text style={[style.homepageHeroDetailsTitle]}>Trades Sum</Text>
              <Text style={[style.homepageHeroDetailsTitle]}>Transactions</Text>
              <Text style={[style.homepageHeroDetailsTitle]}>Difficulty</Text>
              <Text style={[style.homepageHeroDetailsTitle]}>Fee</Text>
              <Text style={[style.homepageHeroDetailsTitle]}>Confirmations</Text>
              <Text style={[style.homepageHeroDetailsTitle]}>Size</Text>
              <Text style={[style.homepageHeroDetailsTitle]}>Days Destroyed</Text>
    	      </View>
    	      <View>
              <Text style={[style.homepageHeroDetails]}>{this.state.nb}</Text>
              <Text style={[style.homepageHeroDetails]}>{this.state.time_utc}</Text>
              <Text style={[style.homepageHeroDetails]}>{this.state.vout_sum}</Text>
              <Text style={[style.homepageHeroDetails]}>{this.state.nb_txs}</Text>
              <Text style={[style.homepageHeroDetails]}>{this.state.difficulty}</Text>
              <Text style={[style.homepageHeroDetails]}>{this.state.fee}</Text>
              <Text style={[style.homepageHeroDetails]}>{this.state.confirmations}</Text>
              <Text style={[style.homepageHeroDetails]}>{this.state.size}</Text>
              <Text style={[style.homepageHeroDetails]}>{this.state.days_destroyed}</Text>
    	      </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subPanelBorder: {
    borderRightWidth: 1,
    borderRightColor: '#579dd8',
    borderStyle: 'solid'
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

export default BlocksHero;
