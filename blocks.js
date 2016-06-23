import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import BlocksHero from './blocks-hero.js';
import BlocksSub from './blocks-sub.js';
import style from './style.js'

class Blocks extends Component {
  constructor(props) {
    super(props);
  }
  _navigate(id) {
    this.props.navigator.push({
      name: 'Transactions',
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
        <BlocksHero id={this.props.id} />
        <BlocksSub onPress={this._handlePress.bind(this)} id={this.props.id} />
      </View>
    )
  }
}

export default Blocks;
