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
	render() {    
    return (
    	<View 
        style={style.container}>
        <BlocksHero id={this.props.id} />
        <BlocksSub id={this.props.id} />
      </View>
    )
  }
}

export default Blocks;
