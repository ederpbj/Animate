import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Modal } from 'react-native';
import CadastroScreen from './src/CadastroScreen'

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      modalVisible:false
    };

    this.cadastrar = this.cadastrar.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  cadastrar(){
    //alert("Clicou em cadastre-se")
    this.setModalVisible(true);
  }

  setModalVisible(status){
    this.setState({modalVisible:status});
  }

  render(){
    return(
      <View style={styles.container}>
        <Button style={styles.btStyle} title="Cadastre-se" onPress={this.cadastrar} />

        <Modal animationType="slide" transparent={true} visible={this.state.modalVisible} onRequestClose={()=>{}} >
          <View style={styles.modalWindow}>
            <View style={styles.modalBody}>
              <CadastroScreen finalizar={()=>{
                this.setModalVisible(false)
              }} />
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  /*Antigo 
  modalWindow:{
    width:300,
    height:300,
    backgroundColor:'#FFFFFF',
    alignSelf:'center'
  }, 
  */
  modalWindow:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalBody:{
    width:300,
    height:300,
    backgroundColor:'#FFFFFF',
    borderRadius:10
  },
  //Teste
/* 
  btStyle:{
    backgroundColor: 'lightgreen',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
   */
  /* Estilo da net, esticado
  modalBody:{
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  }
   */
})