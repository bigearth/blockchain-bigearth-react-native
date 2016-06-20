import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import HomepageHero from './homepage-hero.js';
import HomepageBlocks from './homepage-blocks.js';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }
  _navigate(name) {
  	this.props.navigator.push({
    	name: 'Blocks',
      passProps: {
      	name: name
      }
    })
  }
	render() {    
    return (
    	<View>
        <HomepageHero style={styles.hero} />
        <HomepageBlocks style={styles.sub} url="https://stageblockchain.bigearth.io/blocks/416614,416613,416612,416611,416610,416609,416608,416607,416606,416605,416604,416603,416602,416601,416600,416599,416598,416597,416596,416595.json" />
        <TouchableHighlight onPress={ () => this._navigate('asdf') }>
          <Text>Go to the block page</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  hero: {
    backgroundColor: '#0F5288'
  },
  sub: {
    backgroundColor: '#579dd8'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  base: {
    backgroundColor: 'red'
  }
});

export default Homepage;
