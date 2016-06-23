import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import TransactionsHero from './transactions-hero.js';
import style from './style.js'

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nb: 0
    };
    fetch('https://stageblockchain.bigearth.io/transactions/' + this.props.id + '.json')
    .then((response) => response.text())
    .then((responseText) => {
      var data = JSON.parse(responseText);
      console.log(data);
      this.setState({
        tx: data.data.tx.substring(0,12)+"...",
        vout_sum: numeral(data.data.vout_sum).format('0,0.00'),
        fee: numeral(data.data.fee).format('0,0.00'),
        days_destroyed: numeral(data.data.days_destroyed).format('0,0'),
        vins: data.data.vins,
        vouts: data.data.vouts
      });
    })
  }
  _navigate(id) {
    this.props.navigator.push({
      name: 'Transaction',
      passProps: {
        id: id
      }
    })
  }
  _handlePress(id) {
    this._navigate(id);
  }
	render() {    
    return (
    	<View 
        style={style.container}>
        <TransactionsHero 
          tx={this.state.tx} 
          vout_sum={this.state.vout_sum} 
          fee={this.state.fee} 
          days_destroyed={this.state.days_destroyed} 
        />
      </View>
    )
  }
}

export default Transactions;
