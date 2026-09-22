import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Sabotage() {
  return (
    <ScrollView>
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Sabotage </Text>
    <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/fotos/sabotage1.jpeg')}
     />
     </View>


         <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/fotos/sabotage3.jpg')}
     />
     </View>
     </ScrollView>
     </View>
     <View style={estilo.resumo}>
     <Text style={estilo.textoResumo}>
Sabotage (nascido Mauro Mateus dos Santos, 1973–2003) foi um icônico rapper, compositor e ator brasileiro, amplamente considerado o "Maestro do Canão" e uma das figuras mais influentes da história do rap nacional. Nascido na Zona Sul de São Paulo, ele cresceu na Favela do Canão, enfrentando a pobreza extrema e o envolvimento precoce com a criminalidade e o tráfico de drogas. Sua vida começou a mudar por meio do contato com a música e do incentivo de integrantes do grupo RZO (como Sandrão e Rappin' Hood) e do Racionais MC's, que enxergaram seu talento único para a composição e rimas ágeis.      </Text>
      </View>
      </View>
      </ScrollView>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9370DB',
  },
  img: {
    width: 330,
    height: 400,
    marginHorizontal: 25,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFC0CB',
    fontWeight: 700,
    marginTop: 50,
    marginBottom: 30,
  },
  resumo: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#ffffff70',
    color: '#FFFFE0',
    borderRadius: 7,
    padding: 8,
  },
  textoResumo: {
    fontSize: 19,
  },
});