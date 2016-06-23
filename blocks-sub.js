import React, { Component } from 'react';
import {
  Text,
  ListView,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BlocksSubVin from './blocks-sub-vin.js';
import BlocksSubVout from './blocks-sub-vout.js';
import style from './style.js'

class BlocksSub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
    fetch('https://stageblockchain.bigearth.io/blocks/transactions/' + this.props.id + '.json')
    .then((response) => response.text())
    .then((responseText) => {
      var data = JSON.parse(responseText);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data.data.txs)
      });
    })
    .catch((error) => {
      console.warn(error);
    });
  }
  _handlePress(data) {
    console.log('data', data);
  }
	render() {    
    return (
      <View 
        style={[style.subs]}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <TouchableHighlight onPress={this._handlePress.bind(this, 'boom')}>
              <View style={[style.blockSubPanel, styles.shadow]}>
                <View style={[style.row]}>
                  <View style={[style.blockItem]}>
                    <Text style={[style.blockIcon]}><Icon name="th-large" /></Text>
                    <Text>{rowData.tx.substring(0,12)+"..."}</Text>
                  </View>
                  <View style={[style.blockItem]}>
                    <Text style={[style.blockIcon]}><Icon name="close" /></Text>
                    <Text>{numeral(rowData.days_destroyed).format('0.0a')}</Text>
                  </View>
                  <View style={[style.blockItem]}>
                    <Text style={[style.blockIcon]}><Icon name="btc" /></Text>
                    <Text>{numeral(rowData.fee).format('0.00')}</Text>
                  </View>
                  <View style={[style.blockItem]}>
                    <Text style={[style.blockIcon]}><Icon name="btc" /></Text>
                    <Text>{numeral(rowData.vout_sum).format('0.00')}</Text>
                  </View>
                </View>
                <BlocksSubVin vins={rowData.trade.vins} />
                <BlocksSubVout vouts={rowData.trade.vouts} />
              </View>
            </TouchableHighlight>
          } />
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

export default BlocksSub;
