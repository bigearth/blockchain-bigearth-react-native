import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import HomepageHero from './homepage-hero.js';
import HomepageSub from './homepage-sub.js';
import style from './style.js'

class Homepage extends Component {
  constructor(props) {
    super(props);
  }
  _navigate(id) {
    this.props.navigator.push({
      name: 'Blocks',
      passProps: {
        id: id
      }
    })
  }
  _handlePress(id) {
    this._navigate(id);
  }
	render() {    
    return (
    	<View 
        style={style.container}>
        <HomepageHero />
        <HomepageSub onPress={this._handlePress.bind(this)} />
      </View>
    )
  }
}

export default Homepage;
