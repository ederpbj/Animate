import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

export default class JogoDaVelha extends Component {
  
  constructor(props){
    super(props);
    this.state = {
     
    };

  }

  
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.area}>
          <View style={[styles.velhaVertical, {borderLeftWidth:0}]}>
            
            <View style={[styles.velhaHorizontal, {borderTopWidth:0}]}>
              <View style={{width:60, height:60, backgroundColor:'#FF0000', borderRadius:30}}></View>
            </View>
            
            <View style={styles.velhaHorizontal}>

            </View>
            
            <View style={styles.velhaHorizontal}>

            </View>
            
          </View>

          <View style={styles.velhaVertical}>
            <View style={[styles.velhaHorizontal, {borderTopWidth:0}]}>

            </View>
            
            <View style={styles.velhaHorizontal}>
              <View style={{width:60, height:60, backgroundColor:'#FF0000', borderRadius:30}}></View>
            </View>
            
            <View style={styles.velhaHorizontal}>

            </View>
          </View>

          <View style={styles.velhaVertical}>
            <View style={[styles.velhaHorizontal, {borderTopWidth:0}]}>

            </View>
            
            <View style={styles.velhaHorizontal}>

            </View>
            
            <View style={styles.velhaHorizontal}>
              <View style={{width:60, height:60, backgroundColor:'#FF0000', borderRadius:30}}></View>
            </View>
          </View>
        </View>

        <View style={styles.infoArea}>
          <View style={styles.infoVez}>
            <Text>Vez de: </Text>
            <View style={{width:60, height:60, backgroundColor:'#FF0000', borderRadius:30}}></View>
            
          </View>
          <View style={styles.infoAviso}>
            <Text>X ganhou!</Text>

          </View>
        </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    paddingTop:20
  },
  area:{
    width:300,
    height:300,
    //backgroundColor:'#EEEEEE',
    flexDirection:'row'
  },
  velhaVertical:{
    flex:1,
    //backgroundColor:'#DDDDDD',
    borderLeftWidth:5,
    borderLeftColor:'#000000'
  },
  velhaHorizontal:{
    flex:1,
    //backgroundColor:'#CCCCCC',
    borderTopWidth:5,
    justifyContent:'center',
    alignItems:'center',
    borderTopColor:'#000000'
  },
  infoArea:{
    marginTop:30,
    flexDirection:'row'
  },
  infoVez:{
    width:90,
    height:90,
    backgroundColor:'#CCCCCC',
    justifyContent:'center',
    alignItems:'center'
  },
  infoAviso:{
    flex:1,
    backgroundColor:'#EEEEEE',
    justifyContent:'center',
    alignItems:'center'
  }
  
})