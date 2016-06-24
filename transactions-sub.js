import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TransactionsSubVin from './transactions-sub-vin.js';
import TransactionsSubVout from './transactions-sub-vout.js';
import style from './style.js'

class TransactionsSub extends Component {
  constructor(props) {
    super(props);
  }
  _handlePress(data) {
    this.props.onPress(data);
  }
	render() {
    return (
      <View 
        style={[style.subs, style.container]}>
          <TransactionsSubVout vouts={this.props.vouts} />
          <TransactionsSubVin vins={this.props.vins} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
});

export default TransactionsSub;
