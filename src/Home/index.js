import React, { Component } from 'react';
import { View, Text} from 'react-native';

import {
  Container,
  ButtonNumero,
  ButtonOperacao,
  Display,
  TextButton,
  Bloco,
  TextDisplay
} from './styles';


import Icon from 'react-native-vector-icons/FontAwesome5';
import IconF from 'react-native-vector-icons/FontAwesome';

import { SafeAreaView } from 'react-native-safe-area-context';

const inicialState = {
  display : '0',
  clearDisplay: false,
  operation: null,
  valores: [0, 0],
  valorCurrent: 0,

}
export default class Home extends Component{
  constructor(props){
    super(props)
    this.state = {...inicialState}
  }

  addDigito = (n) =>{
    // limpar o display somente com o dígito zero exemplo 08 virá 8
    const clearDisplay = this.state.display === '0' || this.state.clearDisplay

    //O ponto só pode entrar uma única vez na minha calculadora
    // nesse ponto ele ignora o meu segundo ponto 3.555(.) 
    if(n === '.' && !clearDisplay 
      && this.state.display.includes('.')){
      return
    }
    // valor current é aquele que está no display
    const valorCurrent = clearDisplay ? '' : this.state.display

    // concatena o meu valor corrente com o meu novo ficando 12 por exemplo
    const display = valorCurrent + n

    this.setState({
      clearDisplay: false,
      display
    })

    // digo que o número inserido é válido
    if(n !== '.'){
      // newValue recebe o novo valor
      const newValue = parseFloat(display)

      // novo array - copia
      const valores = [...this.state.valores]
      // armazena no índice do meu array, esse current seria os meus índices 0 e 1
      valores[this.state.valorCurrent] = newValue

      this.setState({
        valores
      })
    }

   
  }

  clearTela = () => {
    // reiniciando o estado da minha tela
    this.setState({
      ...inicialState
    })
  }

  operation = (operation) =>{
    // se o meu indice do vetor for igual a zero
    // setar o estado do operation
    // indice - valorCurrent vai para 1
    // limpar quando estou adicionando o próximo número
    if(this.state.valorCurrent === 0){
      this.setState({
        operation,
        valorCurrent: 1,
        clearDisplay: true
      })
    }
    else{
      const igual = operation === '='
      // copiando meu array
      const valores = [...this.state.valores]
      try{
        // eval para fazer minha operação
        valores[0] = eval(`${valores[0]} ${this.state.operation} ${valores[1]}`)
      } catch (e){
        // se eu em vez de usar um operador usar o = caí no catch
        valores[0] = this.state.valores[0]
      }
      valores[1] = 0
      this.setState({
        display: `${valores[0]}`,
        operation: igual ? null : operation,
        valorCurrent: igual ? 0 : 1,
        //clearDisplay: !igual,
        clearDisplay: true,
        valores,
      })
    } 

  }


  render(){
    return (
      <Container>

        <Display>
          <TextDisplay numberOfLines={1}>{this.state.display}</TextDisplay>
        </Display>

        <SafeAreaView>
          <View style={{flexDirection:'row', marginTop: 20}}>

            <ButtonOperacao onPress={this.clearTela} style={{backgroundColor:'#8c52ea', borderRadius:10}}>
              <TextButton>AC</TextButton>
            </ButtonOperacao>

            <ButtonOperacao onPress={() => this.operation('+')}>
              <Icon name="plus" color='#8c52ea' size={32}></Icon>
            </ButtonOperacao>

            <ButtonOperacao onPress={() => this.operation('-')}>
              <Icon name="minus" color='#8c52ea' size={32}></Icon>
            </ButtonOperacao>

            <ButtonOperacao onPress={() => this.operation('/')}>
              <Icon name="divide" color='#8c52ea' size={32}></Icon>
            </ButtonOperacao>

            <ButtonOperacao onPress={() => this.operation('*')}>
              <IconF name="close" color='#8c52ea' size={32}></IconF>
            </ButtonOperacao>
          </View>

          <Bloco>

            <ButtonNumero onPress={() => this.addDigito(1)}>
              <TextButton>1</TextButton>
            </ButtonNumero>


            <ButtonNumero onPress={() => this.addDigito(2)}>
              <TextButton>2</TextButton>
            </ButtonNumero>


            <ButtonNumero onPress={() => this.addDigito(3)}>
              <TextButton>3</TextButton>
            </ButtonNumero>

            <ButtonNumero onPress={() => this.addDigito(4)}>
              <TextButton>4</TextButton>
            </ButtonNumero>
          </Bloco>

          <Bloco>
            <ButtonNumero onPress={() => this.addDigito(5)}>
              <TextButton>5</TextButton>
            </ButtonNumero>

            <ButtonNumero onPress={() => this.addDigito(6)}>
              <TextButton>6</TextButton>
            </ButtonNumero>

            <ButtonNumero onPress={() => this.addDigito(7)}>
              <TextButton>7</TextButton>
            </ButtonNumero>

            <ButtonNumero onPress={() => this.addDigito(8)}>
              <TextButton>8</TextButton>
            </ButtonNumero>
          </Bloco>

          <Bloco>
            <ButtonNumero onPress={() => this.addDigito(9)}>
              <TextButton>9</TextButton>
            </ButtonNumero>

            <ButtonNumero onPress={() => this.addDigito(0)}>
              <TextButton>0</TextButton>
            </ButtonNumero>

            <ButtonNumero onPress={() => this.addDigito('.')}>
              <TextButton>.</TextButton>
            </ButtonNumero>

            <ButtonOperacao onPress={() => this.operation('=')}
              style={{backgroundColor:'#8c52ea', borderRadius:10}}>
              <Icon name="grip-lines" color='#f7f4fc' size={32}></Icon>
            </ButtonOperacao>
          </Bloco>

        </SafeAreaView>
      </Container>
    );
  }
}



