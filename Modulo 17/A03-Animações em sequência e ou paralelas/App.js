import React, { Component } from 'react';
import { Text, View, Animated } from 'react-native';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      widthRet:new Animated.Value(250),
      heightRet:new Animated.Value(50),
      opacityRet:new Animated.Value(0) //de 0 a 1
    };

    Animated.sequence([
      //Seq1
      Animated.timing(
        this.state.opacityRet,
        {
          toValue:1,
          duration:2000
        }
      ),
      
      //Seq2
      Animated.parallel([

        Animated.timing(
          this.state.heightRet,
          {
            toValue:100,
            duration:500
          }
        ),
        
        
        Animated.timing(
          this.state.widthRet,
          {
            toValue:300,
            duration:500
          }
        )
  
      ]),

      //Seq3
      Animated.timing(
        this.state.opacityRet,
        {
          toValue:0,
          duration:2000
        }
      )

    ]).start();


/* 
    Animated.timing(
      this.state.heightRet,
      {
        //Muda até o valor
        toValue:500,
        //Duração em milisegundos (2 seg = 2000)
        duration:2000
      }
    ).start();
 */

  }

  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

        <Animated.View style={{opacity:this.state.opacityRet, width:this.state.widthRet, height:this.state.heightRet, backgroundColor:'#FF0000'}}>
          <Text style={{color:'#FFFFFF', fontSize:25, textAlign:'center'}}>TEXTO Padrão</Text>
        </Animated.View>

      </View>
    )
  }
}