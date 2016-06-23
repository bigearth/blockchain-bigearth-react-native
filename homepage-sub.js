import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Numeral from 'numeral'
import Moment from 'moment'
import style from './style.js'

class HomepageSub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
    fetch('https://stageblockchain.bigearth.io/blocks/417500,417499,417498,417497,417496,417495,417494,417493,417492,417491,417490,417489,417488,417487,417486,417485,417484,417483,417482,417481.json')
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
  propTypes: {
    onPress: React.PropTypes.func
  }
  _handlePress(data) {
    this.props.onPress(data);
  }
	render() {    
    return (
      <View 
        style={[style.subs]}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <TouchableHighlight onPress={this._handlePress.bind(this, rowData.nb)}>
              <View style={[style.homepageSubPanel, styles.shadow]}>
                <View style={[style.homepageBlockItem]}>
                  <Text style={[style.homepageBlockIcon]}><Icon name="th-large" /></Text>
                  <Text>{numeral(rowData.nb).format('0,0')}</Text>
                </View>
                <View style={[style.homepageBlockItem]}>
                  <Text style={[style.homepageBlockIcon]}><Icon name="calendar" /></Text>
                  <Text style={[style.homepageBlockTime]}>{Moment(rowData.time_utc).fromNow()}</Text>
                </View>
                <View style={[style.homepageBlockItem]}>
                  <Text style={[style.homepageBlockIcon]}><Icon name="arrows-h" /></Text>
                  <Text>{numeral(rowData.nb_txs).format('0,0')}</Text>
                </View>
                <View style={[style.homepageBlockItem]}>
                  <Text style={[style.homepageBlockIcon]}><Icon name="btc" /></Text>
                  <Text>{numeral(rowData.fee).format('0.00')}</Text>
                </View>
                <View style={[style.homepageBlockItem]}>
                  <Text style={[style.homepageBlockIcon]}><Icon name="calculator" /></Text>
                  <Text>{numeral(rowData.size).format('0 b')}</Text>
                </View>
                <View style={[style.homepageBlockItem]}>
                  <Text style={[style.homepageBlockIcon]}><Icon name="close" /></Text>
                  <Text>{numeral(rowData.days_destroyed).format('0.0a')}</Text>
                </View>
              </View>
            </TouchableHighlight>
          }
          initialListSize={14}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sub: {
    padding: 20
  },
  subBase: {
    fontSize: 17
  },
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

export default HomepageSub;
