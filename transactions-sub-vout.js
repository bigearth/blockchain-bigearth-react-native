import React, { Component } from 'react';
import {
  Text,
  ListView,
  View
} from 'react-native';
import style from './style.js'

class TransactionsSubVouts extends Component {
  constructor(props) {
    super(props);
  }
	render() {    
    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <View>
        <ListView
          dataSource={dataSource.cloneWithRows(this.props.vouts)}
          enableEmptySections={true}
          renderRow={(rowData) => 
            <View style={[style.subPanel]}>
              <Text style={[style.heroDetailsTitle]}>Vouts</Text>
            </View>
          } />
      </View>
    )
  }
}

export default TransactionsSubVouts;
