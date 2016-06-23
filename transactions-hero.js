import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Numeral from 'numeral'
import Moment from 'moment'
import style from './style.js'

class TransactionsHero extends Component {
  constructor(props) {
    super(props);
  }
	render() {    
    return (
    	<View style={[style.hero]}>
    	  <View style={[style.heroPanel, styles.shadow]}>
          <Text style={[style.heroTitle]}>Transaction</Text>
    	    <View style={[style.row]}>
    	      <View style={[style.subPanelBorder]}>
              <Text style={[style.heroDetailsTitle]}>Hash</Text>
              <Text style={[style.heroDetailsTitle]}>Days Destroyed</Text>
              <Text style={[style.heroDetailsTitle]}>Fee</Text>
              <Text style={[style.heroDetailsTitle]}>Sum</Text>
    	      </View>
    	      <View>
              <Text style={[style.heroDetails]}>{this.props.tx}</Text>
              <Text style={[style.heroDetails]}>{this.props.days_destroyed}</Text>
              <Text style={[style.heroDetails]}>{numeral(this.props.fee).format('0.00')}</Text>
              <Text style={[style.heroDetails]}>{numeral(this.props.vout_sum).format('0.00')}</Text>
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

export default TransactionsHero;
