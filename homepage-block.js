import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  ListView
} from 'react-native';

class HomepageBlock extends Component {
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
    	<View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <View>
              <Text>{rowData.nb}</Text>
              <Text>{rowData.time_utc}</Text>
              <Text>{rowData.nb_txs}</Text>
              <Text>{rowData.fee}</Text>
              <Text>{rowData.size}</Text>
              <Text>{rowData.days_destroyed}</Text>
            </View>
          }
        />
      </View>
    )
  }
}

export default HomepageBlock;
