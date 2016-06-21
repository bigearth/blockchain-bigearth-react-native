import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        style={styles.container}>
        <View style={[styles.sub]}>
          <Text style={[styles.subBase]}><Icon style={[styles.subBase]} name="th" /> Last 20 <Text style={[styles.subBaseSubtitle]}>Bitcoin</Text> Blocks</Text>
          <View style={[styles.row]}>
            <Text>Height</Text>
            <Text>Created</Text>
            <Text>Transactions</Text>
            <Text>Fee</Text>
            <Text>Size</Text>
            <Text>Days Destroyed</Text>
          </View>
        </View>
        <ListView
          style={styles.listViewContainer}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <View style={[styles.buttonContainer]}>
              <View style={[styles.row]}>
                <Text>{rowData.nb}</Text>
                <Text>{rowData.time_utc}</Text>
                <Text>{rowData.nb_txs}</Text>
                <Text>{rowData.fee}</Text>
                <Text>{rowData.size}</Text>
                <Text>{rowData.days_destroyed}</Text>
              </View>
            </View>
          }
          initialListSize={14}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#579dd8'
  },
  listViewContainer: {
      flex: 1,
      flexDirection: 'column'
  },
  sub: {
    padding: 20
  },
  row: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: "#EEE",
  },
  subBase: {
    color: '#fff',
    fontSize: 17
  },
  subBaseSubtitle: {
    color: '#0F5288',
    fontWeight: 'bold'
}
});

export default HomepageSub;
