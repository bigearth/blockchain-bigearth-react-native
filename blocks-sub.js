import React, { Component } from 'react';
import {
  Text,
  ListView,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';
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
              <View style={[style.subPanel, styles.shadow]}>
                <View style={[style.blockItem]}>
                  <Text>{rowData.tx}</Text>
                  <Text>{rowData.days_destroyed}</Text>
                  <Text>{rowData.fee}</Text>
                  <Text>{rowData.vout_sum}</Text>
                  <BlocksSubVin vins={rowData.trade.vins} />
                  <BlocksSubVout vouts={rowData.trade.vouts} />
                </View>
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
