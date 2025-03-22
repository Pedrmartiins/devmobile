import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput,
  Button,
  Alert,
  Plataform,
  BackHandler,
 } from 'react-native';

class LoginScreen extends Component{
  constructor(props){
    super(props);
    this.state = {username: '', password:''};
    console.log('LoginScreen: constructor');
    
  }
  componentDidMount(){
    console.log('LoginScreen: componentDidMount');
  }
  componentWillUnmount(){
    console.log('LoginScreen: componentWillUnmount');
  }
  render(){
    console.log('LoginScreen: render');
    return(
      <View style={style.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
        style={styles.input}
        placeholder="Usuario"
        onChangeText={(username)=>this.setState({username})}/>

        <TextInput
          </View>
    )
  }
}