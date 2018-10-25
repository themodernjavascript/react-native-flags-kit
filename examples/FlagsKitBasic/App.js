/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import Flag from 'react-native-flags-kit';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Flag
          code="US"
          size={64}
        />
        <Flag
          code="JP"
          size={64}
        />
        <Flag
          code="CN"
          size={64}
        />
        <Flag
          code="RU"
          size={64}
        />
        <Flag
          code="KH"
          size={64}
        />
        <Flag
          code="VN"
          size={64}
        />
        <Flag
          code="SG"
          size={64}
        />
        <Flag
          code="MY"
          size={64}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    fontSize: 30,
  },
});
