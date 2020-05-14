import * as React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/Home';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#06050B'}, 
        headerTintColor:'#b388eb',
      }}>
      <Stack.Screen name="Home" component={Home} options={{
        headerTitle:'Calculadora',
        headerTitleAlign:'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          paddingTop: 20,
          paddingBottom: 10,
        }
      }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
