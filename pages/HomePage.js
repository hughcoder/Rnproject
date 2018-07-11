import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList, Button } from 'react-native'

export default class HomePage extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Text style={{ fontSize: 28, color: 'black' }}>欢迎来的HomePage</Text>
        <Button
          title="Go to Page1"
          onPress={
            () => {
              navigation.navigate('Page1');
            }
          }
        />
        <Button
          title="Go to Page2"
          onPress={
            () => {
              navigation.navigate('Page2');
            }
          }
        />
      </View>
    );
  }
}