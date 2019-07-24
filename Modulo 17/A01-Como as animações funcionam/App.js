import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      widthRet:250,
      heightRet:50
    }
  }

  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <View style={{width:this.state.widthRet, height:this.state.heightRet, backgroundColor:'#FF0000'}}>
          <Text style={{color:'#FFFFFF', fontSize:25, textAlign:'center'}}>TEXTO Padrão</Text>
        </View>
      </View>
    )
  }
}