import React from 'react';
import Routes from '../routes';
import {StatusBar} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function src() {
  return (
   <SafeAreaProvider>
     <StatusBar barStyle="light-content" backgroundColor="#06050B"/>
     <Routes/>
   </SafeAreaProvider>
    
  )
}