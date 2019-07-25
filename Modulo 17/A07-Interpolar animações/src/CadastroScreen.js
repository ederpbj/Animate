import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default class CadastroScreen extends Component {
  
  constructor(props){
    super(props);
    this.state = {
    };

  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Tela cadastrar....</Text>
        <TextInput placeholder="Digite aqui" />
        <Button title="Finalizar Cadastro" onPress={this.props.finalizar} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})