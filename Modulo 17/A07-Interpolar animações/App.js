import React, { Component } from 'react';
import { View, StyleSheet, Animated, Image } from 'react-native';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      numero:new Animated.Value(0),
      spin:new Animated.Value(0)
    };

    Animated.timing(
      this.state.numero,
      { toValue:100, duration:3000 }
    ).start()
   
    //Para rotação
    Animated.timing(
      this.state.spin,
      { toValue:360, duration:5000 }
    ).start()
   
  }

  
  render(){
    let pct = this.state.numero.interpolate({
      inputRange:[0,100],
      outputRange:['0%', '100%']
    })
    
    //Para rotação
    let spin = this.state.spin.interpolate({
      inputRange:[0,45],
      outputRange:['0deg', '100deg']
    })

    return(
      <View style={styles.container}>
        <Animated.View style={{backgroundColor:'#0000FF', height:100, width:pct}} >
            <Image
              source={require('./src/assets/images/cookie.png')}
             />
        </Animated.View>

        <Animated.View style={{backgroundColor:'#FF0000', height:100, transform: [{rotate: spin}]}}>
        </Animated.View>

        <Animated.View style={{backgroundColor:'#00FF00', height:50, transform: [{rotate: spin}]}}>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  
})