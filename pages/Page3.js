import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList, Button, TextInput } from 'react-native'

export default class Page3 extends Component {
  render() {
    const { navigation } = this.props;
    const { state, setParams } = navigation;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 18, color: 'black' }}>欢迎来到Page3</Text>
        <Button
          title="go back"
          onPress={() => {
            navigation.goBack();//goBack可以传key跳转到指定页面
          }}
        />
        <TextInput
          style={{ height: 50, borderWidth: 1, marginTop: 20, borderColor: 'black' }}
          onChangeText={(text) => {
            setParams({ title: text });
          }}
        />
      </View>
    );
  }
}
