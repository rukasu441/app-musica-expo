import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Musica(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> As melhores Músicas</Text>

      <FlatList
      data={musicas}

      renderItem={({ item }) =>
      <View style={estilo.musica}>         
      <TouchableOpacity
       onPress={() => {
       props.navigation.navigate(item.buttom);  }}>
       <Text style={estilo.txtArtista}> {item.nome}</Text>
      </TouchableOpacity>

        <View style={estilo.rede}>
          <Text style={estilo.curtidas}>
          <MaterialCommunityIcons
            name="thumb-up"
            size={20}
            color={'red'}
            />
            {item.like} Curtidas
            </Text>
            <Text style={estilo.reproducoes}>
            <MaterialCommunityIcons
            name="headphones"       
            size={20}
            color={'blue'}
            />
            {item.reproducoes} Reproduções
            </Text>
          </View>
        </View>
      }
    />
    </View>
  );
}

const musicas = [
  {
    uid: 1,
    nome: 'Always',
    like: "3M",
    reproducoes: "2,4B",
    buttom:'Always',
  },
  {
    uid: 2,
    nome: 'Pink Matter',
    like: "2,7M",
    reproducoes: "3,2B",
     buttom:'Pinkmatter',
  },
    {
    uid: 3,
    nome: 'Mun Rá',
    like: "1,9M",
    reproducoes: "1,3B",
     buttom:'Munra',
  },
    {
    uid: 4,
    nome: 'See you Again',
    like: "3,5M",
    reproducoes: "2,9B",
    buttom:'Seeyouagain',
  },
];

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#8A2BE2',
  },
  musica: {
    backgroundColor: '#E6E6FA',
    justifyContent: 'center',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 700,
    marginVertical: 30,
  },
  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txtArtista: {
    fontSize: 20,
  },
});
