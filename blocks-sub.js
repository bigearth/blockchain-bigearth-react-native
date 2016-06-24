// @flow
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
import Numeral from 'numeral'
import style from './style.js'

class BlocksSub extends Component {
  state: {
    dataSource: Object;
  };
  constructor(props: any) {
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
  _handlePress(data: string) {
    this.props.onPress(data);
  }
	render() {    
    return (
      <View 
        style={[style.subs]}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <TouchableHighlight onPress={this._handlePress.bind(this, rowData.tx)}>
              <View style={[style.blockSubPanel, styles.shadow]}>
                <View style={[style.row]}>
                  <View style={[style.blockItem]}>
                    <Text style={[style.blockIcon]}><Icon name="th-large" /></Text>
                    <Text>{rowData.tx.substring(0,12)+"..."}</Text>
                  </View>
                  <View style={[style.blockItem]}>
                    <Text style={[style.blockIcon]}><Icon name="close" /></Text>
                    <Text>{Numeral(rowData.days_destroyed).format('0.0a')}</Text>
                  </View>
                  <View style={[style.blockItem]}>
                    <Text style={[style.blockIcon]}><Icon name="btc" /></Text>
                    <Text>{Numeral(rowData.fee).format('0.00')}</Text>
                  </View>
                  <View style={[style.blockItem]}>
                    <Text style={[style.blockIcon]}><Icon name="arrows-h" /></Text>
              	    <View style={[style.row]}>
                      <View style={[style.subPanelBorder]}>
                        <Text style={[style.heroDetailsTitle, style.red]}>{rowData.trade.vins.length} <Icon name="arrow-right" /></Text>
                      </View>
                      <View>
                        <Text style={[style.heroDetails, style.green]}><Icon name="arrow-left" /> {rowData.trade.vouts.length}</Text>
                      </View>
                    </View>
                  </View>
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
