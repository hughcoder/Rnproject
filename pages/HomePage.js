import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList, Button } from 'react-native'

export default class HomePage extends Component {
  static navigationOptions ={
    title:"Home"
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Text style={{ fontSize: 28, color: 'black' }}>欢迎来的HomePage</Text>
        <Button
          title="Go to Page1"
          onPress={
            () => {
              navigation.navigate('Page1',{name: '动态的'});
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
            <Button
          title="Go to Page3----->"
          onPress={
            () => {
              navigation.navigate('Page3');
            }
          }
        />
      </View>
    );
  }
}