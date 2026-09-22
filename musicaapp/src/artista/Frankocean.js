import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Frankocean() {
  return (
    <ScrollView>
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Frank Ocean</Text>
    <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/fotos/frank1.jpg')}
     />
     </View>

    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/fotos/frank2.jpg')}
     />
     </View>

         <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/fotos/frank3.jpg')}
     />
     </View>
     </ScrollView>
     </View>
     <View style={estilo.resumo}>
     <Text style={estilo.textoResumo}>
Frank Ocean (nascido Christopher Edwin Breaux, 1987) é um aclamado cantor, compositor e rapper americano, amplamente considerado pela crítica como um dos principais pioneiros do R&B alternativo. Nascido na Califórnia, ele cresceu imerso na rica cena musical de Nova Orleans, mas teve que se mudar para Los Angeles após o furacão Katrina destruir seu estúdio de gravações em 2005. Na Costa Oeste, iniciou sua trajetória na indústria musical trabalhando nos bastidores como ghostwriter, compondo faixas para artistas de peso como Beyoncé, Justin Bieber e John Legend.      </Text>
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