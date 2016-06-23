import React, { Component } from 'react';
import {
  Text,
  ListView,
  TouchableHighlight,
  View
} from 'react-native';
import style from './style.js'

class BlocksSubVin extends Component {
  constructor(props) {
    super(props);
  }
  _handlePress(data) {
    console.log('data', data);
  }
	render() {    
    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <View>
        <ListView
          dataSource={dataSource.cloneWithRows(this.props.vins)}
          enableEmptySections={true}
          renderRow={(rowData) => 
            <TouchableHighlight onPress={this._handlePress.bind(this, 'yay')}>
              <View style={[style.subPanel]}>
                <Text>Vins</Text>
              </View>
            </TouchableHighlight>
          } />
      </View>
    )
  }
}

export default BlocksSubVin;
