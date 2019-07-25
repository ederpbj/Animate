import React, { Component } from 'react';
import { Text, View, Animated, Button } from 'react-native';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      widthRet:new Animated.Value(250),
      heightRet:new Animated.Value(50)

    };

    this.aumentarAltura = this.aumentarAltura.bind(this);
    this.diminuirAltura = this.diminuirAltura.bind(this);

  }

  aumentarAltura(){

    Animated.timing(
      this.state.heightRet,
      {
        toValue:100,
        duration:500
      }
    ).start()
  }

  diminuirAltura(){
    Animated.timing(
      this.state.heightRet,
      {
        toValue:50,
        duration:500
      }
    ).start()
  }

  render(){
    return(
      <View style={{flex:1}}>
   
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Animated.View style={{width:this.state.widthRet, height:this.state.heightRet, backgroundColor:'#FF0000'}}>
            <Text style={{color:'#FFFFFF', fontSize:25, textAlign:'center'}}>TEXTO Padrão</Text>
          </Animated.View>
        </View>

        <View style={{height:100, flexDirection:'row', justifyContent:'space-around'}}>
          <Button title="Aumentar altura (100)" onPress={this.aumentarAltura} /> 
          <Button title="Diminuir altura (50)" onPress={this.diminuirAltura} /> 
        </View>

      </View>
    )
  }
}