import React, { Component } from 'react';
import { Text, View, Animated } from 'react-native';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      widthRet:new Animated.Value(250),
      heightRet:new Animated.Value(50)
      //opacityRet:new Animated.Value(0) //de 0 a 1
    };

    Animated.loop(

      Animated.sequence([
        //S1
        Animated.timing(
          this.state.heightRet,
          {
            toValue:100,
            duration:500
          }
        ),
        //S2
        Animated.timing(
          this.state.heightRet,
          {
            toValue:50,
            duration:500
          }
        )
      ])

    ).start();

  }

  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

        <Animated.View style={{width:this.state.widthRet, height:this.state.heightRet, backgroundColor:'#FF0000'}}>
          <Text style={{color:'#FFFFFF', fontSize:25, textAlign:'center'}}>TEXTO Padrão</Text>
        </Animated.View>

      </View>
    )
  }
}