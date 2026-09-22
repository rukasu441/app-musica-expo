import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Danielcaesar() {
  return (
    <ScrollView>
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Daniel Caesar</Text>
    <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/fotos/daniel1.jpg')}
     />
     </View>

    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/fotos/daniel2.jpg')}
     />
     </View>

         <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/fotos/daniel3.webp')}
     />
     </View>
     </ScrollView>
     </View>
     <View style={estilo.resumo}>
     <Text style={estilo.textoResumo}>
     Daniel Caesar (Ashton Simmonds, 1995) é um renomado cantor e compositor canadense de R&B e neo-soul. Criado em um lar religioso adventista, ele absorveu influências da música gospel que hoje moldam seu estilo etéreo e coral. Aos 17 anos, após conflitos familiares, mudou-se para Toronto para seguir carreira musical, enfrentando um período difícil em que chegou a ficar desabrigado. Sua persistência deu resultado com o lançamento do álbum independente Freudian (2017), que o catapultou ao sucesso global com os hits "Best Part" (com H.E.R.) e "Get You" (com Kali Uchis). Vencedor do Grammy, o artista é amplamente reconhecido por suas letras profundas sobre amor e espiritualidade, além de colaborações de peso como o sucesso mundial "Peaches", ao lado de Justin Bieber.
      </Text>
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