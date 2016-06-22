import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Numeral from 'numeral'
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
        style={[style.subs]}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <View style={[style.homepageSubPanel]}>
              <View style={[style.homepageBlockItem]}>
                <Text><Icon name="th-large" /></Text>
                <Text>{numeral(rowData.nb).format('0,0')}</Text>
        
              </View>
              <View style={[style.homepageBlockItem]}>
                <Text><Icon name="calendar" /></Text>
                <Text>{rowData.time_utc}</Text>
              </View>
              <View style={[style.homepageBlockItem]}>
                <Text><Icon name="arrows-h" /></Text>
                <Text>{numeral(rowData.nb_txs).format('0,0')}</Text>
              </View>
              <View style={[style.homepageBlockItem]}>
                <Text><Icon name="btc" /></Text>
                <Text>{numeral(rowData.fee).format('0.00')}</Text>
              </View>
              <View style={[style.homepageBlockItem]}>
                <Text><Icon name="calculator" /></Text>
                <Text>{numeral(rowData.size).format('0 b')}</Text>
              </View>
              <View style={[style.homepageBlockItem]}>
                <Text><Icon name="close" /></Text>
                <Text>{numeral(rowData.days_destroyed).format('0.0a')}</Text>
              </View>
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
