import { Component } from 'react';
import {StyleSheet, Text, View, Modal, TextInput, TouchableOpacity, Image} from 'react-native';



export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    modalVisible : false,
    valorAlcool: '',
    valorGasolina: '',
    melhorOpcao: '',
    }
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
    this.calcularMelhorOpcao = this.calcularMelhorOpcao.bind(this);
  }
  entrar(){
    this.setState({modalVisible: true})
  }

  sair(){
    this.setState({modalVisible: false})
  }

  
  calcularMelhorOpcao() {
    const { valorAlcool, valorGasolina } = this.state;
    if (valorAlcool && valorGasolina) {
      const custoAlcool = parseFloat(valorAlcool);
      const custoGasolina = parseFloat(valorGasolina);

      const rendimentoAlcool = custoAlcool / 0.7;
      if (rendimentoAlcool <= custoGasolina) {
        this.setState({ modalVisible: true, melhorOpcao: 'Álcool' });
      } else {
        this.setState({ modalVisible: true, melhorOpcao: 'Gasolina' });
      }
    } else {
      alert("Por favor, preencha ambos os campos.");
    }
  }

  render(){
      return (
    <View style={styles.container}>

  <View style={styles.boxImage}>
          <Image
          style={styles.image}
          source={require('./src/Img/posto.png')}
          />

        </View>   

        <View style={styles.Title}>
          <Text style={{color: '#FFF', fontSize: 30, fontWeight: 'bold', marginTop: -110}}>Qual a melhor opção:</Text>
        </View>

     

        <View style={styles.inputBox}>

        <Text style={styles.placeholder1}>Álcool :</Text>
        <TextInput style={styles.inputÁlcool}
        placeholderTextColor='#FFF' 
        value={this.state.valorAlcool}
        onChangeText={(valor) => this.setState({valorAlcool: valor})}
 
        />

        <Text style={styles.placeholder2}>Gasolina :</Text>
        <TextInput style={styles.inputGasolina}
        placeholderTextColor='#FFF' 
        value={this.state.valorGasolina}
        onChangeText={(valor) => this.setState({valorGasolina: valor})}
        />

        </View>

      <TouchableOpacity onPress={this.calcularMelhorOpcao}>
        <Text style={styles.textBtn}>Calcular melhor opção : </Text>
      </TouchableOpacity>

      <Modal animationType='fade' visible={this.state.modalVisible}>
        <View style={{backgroundColor: '#202124', flex: 1}}>
          <Text style={{color: '#00FF00', fontSize: 28, justifyContent: 'center', textAlign: 'center', marginTop: 110}}>Compensa usar {this.state.melhorOpcao}</Text>

          <View style={styles.boxCalcularNovamente}>
          <TouchableOpacity onPress={this.sair}>
          <Text style={styles.textExit}>Calcular novamente : </Text>
          </TouchableOpacity> 

          <Image
          style={styles.image2}
          source={require('./src/Img/mang.png')}
          />
          </View>


        </View>
      </Modal>
 
    </View>
  );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxImage:{
    width: 100, 
    height: 150,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    height: 160,
    width: 160,
    top: -90,
    marginLeft: 20
  },
  image2:{
    height: 160,
    width: 160,
    top: -390,
    marginLeft: '28%'
  },
  inputBox:{
    width: 320,
    height: 90,
    },
    inputÁlcool:{
      padding: 8,
      width: 330,
      borderWidth: 1,
      borderColor: 'white',
      marginBottom: 20,
      borderRadius: 20,
      color: 'white'
    },
    placeholder1:{
      color: 'white',
      marginLeft: 10,
      marginBottom: 6
    },
    placeholder2:{
      color: 'white',
      marginLeft: 10,
      marginBottom: 6
    },
    inputGasolina:{
      padding: 8,
      width: 330,
      borderWidth: 1,
      borderColor: 'white',
      marginBottom: 20,
      borderRadius: 20,
      color: 'white'
    },
    textBtn:{
      marginTop: 80,
      borderRadius: 30,
      padding: 10,
      width: 190,
      textAlign: 'center',
      backgroundColor: 'white',
      color: '#202124',
    },
    textExit:{
      marginTop: '100%',
      marginLeft: '28%',
      borderRadius: 30,
      borderWidth: 2,
      borderColor: '#00FF00',
      padding: 10,
      width: 180,
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      color: 'white'
    },
});