import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList, Button } from 'react-native'

export default class Page1 extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Text style={{ fontSize: 18, color: 'black' }}>欢迎来到Page1</Text>
          <Button
            title="go back"
            onPress={() => {
              navigation.goBack();//goBack可以传key跳转到指定页面
            }}
          />
      </View>
          );
        }
}