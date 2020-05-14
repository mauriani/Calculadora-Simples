import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;


export const Container = styled.View`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
  background-color: #06050B;
`;

export const Bloco = styled.View`
  flex-direction:row;
  flex-wrap: wrap;
`;

export const ButtonNumero = styled.TouchableOpacity`
  height:140px;
  width: 100px;
  margin: 1px;
  background-color: #06050B;
  align-items:center;
  justify-content:center;
`;

export const ButtonOperacao = styled.TouchableOpacity`
  height:110px;
  width: 80px;;
  margin: 1px;
  background-color: #06050B;
  align-items:center;
  justify-content:center;
`;

export const TextButton = styled.Text `
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
`;

export const Display = styled.View`
  background-color: #f5f5f5;
  border-radius: 10px;
  height: 100px;
  margin: 10px;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;
`;

export const TextDisplay = styled.Text `
  font-size: 40px;
  padding: 5px;
  color: #3c3744;
  font-weight: bold;
`;


