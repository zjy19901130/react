/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import MainComponent from './app/components/project/main'
import LoginCompoent from './app/components/project/login'
import ProductComponent from './app/components/project/productList'
import DetailComponent from './app/components/project/detail'
import UserListComponent from './app/components/project/userList'


var myNavigator=createStackNavigator({
  'login':{
    screen:LoginCompoent
  }, 
  'main':{
    screen:MainComponent
   }, 
  'list':{
    screen:ProductComponent
  },
 
  
  "detail":{
    screen:DetailComponent
  },
  "userList":{
    screen:UserListComponent
  }

});

export default class myapp extends Component {
  render() {
    return (
        <View></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

AppRegistry.registerComponent('myapp', () => myNavigator);
