import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import HomepageHero from './homepage-hero.js';
import HomepageSub from './homepage-sub.js';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }
	render() {    
    return (
    	<View 
        style={styles.container}>
        <HomepageHero />
        <HomepageSub />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default Homepage;
