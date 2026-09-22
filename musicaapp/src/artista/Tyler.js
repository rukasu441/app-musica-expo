import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Tyler() {
  return (
    <ScrollView>
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Tyler, The Creator</Text>
    <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/fotos/tyler1.jpg')}
     />
     </View>

    <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/fotos/tyler2.jpg')}
     />
     </View>

         <View>
    <Image
     resizeMode={'stretch'}
     style={estilo.img}
     source={require('../../assets/fotos/tyler3.jpg')}
     />
     </View>
     </ScrollView>
     </View>
     <View style={estilo.resumo}>
     <Text style={estilo.textoResumo}>
Tyler, the Creator (nome artístico de Tyler Gregory Okonma, 1991) é um aclamado rapper, compositor, produtor musical, designer de moda e ator americano. Ele é amplamente reconhecido como uma das mentes mais inovadoras, multifacetadas e disruptivas da cultura pop e do hip-hop alternativo contemporâneo. Nascido na Califórnia, Tyler passou a infância mudando frequentemente de escola e foi criado pela mãe, tendo uma relação de forte distanciamento com seu pai ausente — um tema recorrente e doloroso explorado em suas composições iniciais. Desde muito jovem, já demonstrava uma criatividade fora do comum: aos sete anos de idade, costumava customizar capas de discos para álbuns imaginários e, aos 14, aprendeu a tocar piano de forma totalmente autodidata.      </Text>
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