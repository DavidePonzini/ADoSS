import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

export default class AddReport extends Component {
  render () {
    return (
      <View>
        <FormLabel>Name</FormLabel>
        <FormInput />
        <FormValidationMessage>Error message</FormValidationMessage>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
