import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style.js'

class HomepageSub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
    fetch('https://stageblockchain.bigearth.io/blocks/416614,416613,416612,416611,416610,416609,416608,416607,416606,416605,416604,416603,416602,416601,416600,416599,416598,416597,416596,416595.json')
    .then((response) => response.text())
    .then((responseText) => {
      let data = JSON.parse(responseText);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data.data)
      });
    })
    .catch((error) => {
      console.warn(error);
    });
  }
	render() {    
    return (
      <View 
        style={[style.subs, style.flex, style.column]}>
        <View style={[styles.subs]}>
          <Text style={[styles.subBase, style.white]}><Icon style={[styles.subBase, style.white]} name="th" /> Last 20 <Text style={[style.homepageSubTitle]}>Bitcoin</Text> Blocks</Text>
          <View style={[style.row]}>
            <Text>Height</Text>
            <Text>Created</Text>
            <Text>Transactions</Text>
            <Text>Fee</Text>
            <Text>Size</Text>
            <Text>Days Destroyed</Text>
          </View>
        </View>
        <ListView
          style={[style.column, style.flex]}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <View style={[style.homepageSubPanel]}>
              <Text>{rowData.nb}</Text>
              <Text>{rowData.time_utc}</Text>
              <Text>{rowData.nb_txs}</Text>
              <Text>{rowData.fee}</Text>
              <Text>{rowData.size}</Text>
              <Text>{rowData.days_destroyed}</Text>
            </View>
          }
          initialListSize={14}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listViewContainer: {
    flex: 1
  },
  sub: {
    padding: 20
  },
  subBase: {
    fontSize: 17
  }
});

export default HomepageSub;
