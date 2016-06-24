import React, { Component } from 'react';
import {
  Text,
  ListView,
  StyleSheet,
  View
} from 'react-native';
import Numeral from 'numeral'
import style from './style.js'

class TransactionsSubVin extends Component {
  constructor(props) {
    super(props);
  }
	render() {    
    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <View>
        <ListView
          dataSource={dataSource.cloneWithRows(this.props.vins)}
          enableEmptySections={true}
          renderRow={(rowData) => 
            <View style={[style.blockSubPanel, styles.shadow]}>
              <View style={[style.row]}>
        	      <View style={[style.subPanelBorder]}>
                  <Text style={[style.heroDetailsTitle]}>{rowData.address.substring(0,20)+"..."}</Text>
        	      </View>
        	      <View>
                  <Text style={[style.heroDetails, style.red]}>{rowData.amount}</Text>
        	      </View>
              </View>
            </View>
          } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  price: {
    fontSize: 65,
    fontWeight: '500',
    color: '#444'
  },
  shadow: {
    shadowColor: "#111",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
});

export default TransactionsSubVin;
