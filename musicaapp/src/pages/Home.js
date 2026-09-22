import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home(props) {
  return (
    <View style={estilo.container}>
    <ImageBackground style={estilo.fundoimg} resizeMode="streth" source={require('../../assets/fotos/fundo.png')}>
    <Text style={estilo.titulo}> App de Música </Text>
    </ImageBackground>
    </View>
  );
}
const estilo = StyleSheet.create({
  container:{
    flex:1,
  },
  fundoimg:{
    flex:1,
    justifyContent: 'center'
  },
  titulo:{
    fontSize: 50,
    textAlign: 'center',
    color: '#9400D3',
    fontWeight: 700,
  }
})