import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
            <Text style={styles.title1}>Over</Text>
            <Text style={styles.title2}>Stats</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    paddingTop: 60,
    backgroundColor: '#303030',
  },
  title1: {
    fontSize: 40,
    color: '#FFF',
    textAlign: 'center',
  },
  title2: {
    fontSize: 40,
    color: '#DFAA35',
    textAlign: 'center',
  },
});