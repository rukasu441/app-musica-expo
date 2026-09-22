import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Artista(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Os melhores Artistas</Text>

      <FlatList
        data={artistas}
        renderItem={({ item }) => (
          <View style={estilo.artista}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(item.buttom);
              }}>
              <Text style={estilo.txtArtista}> {item.nome}</Text>
            </TouchableOpacity>
            <View style={estilo.rede}>
              <Text style={estilo.curtidas}>
                <MaterialCommunityIcons
                  name="thumb-up"
                  size={20}
                  color={'#F00'}
                />
                {item.like} Curtidas
              </Text>
              <Text style={estilo.seguidores}>
                <MaterialCommunityIcons
                  name="account-heart"
                  size={20}
                  color={'blue'}
                />
                {item.seguidores} Seguidores
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const artistas = [
  {
    uid: 1,
    nome: 'Daniel Caesar',
    like: '693M',
    seguidores: "23M",
    buttom: 'Danielcaesar',
  },
  {
    uid: 2,
    nome: 'Frank Ocean',
    like: '381M',
    seguidores: '17,5M',
    buttom: 'Frankocean',
  },
  {
    uid: 3,
    nome: 'Sabotage',
    like: '309M',
    seguidores: '43M',
    buttom: 'Sabotage',
  },
  {
    uid: 4,
    nome: 'Tyler, The Creator',
    like: '604M',
    seguidores: '32M',
    buttom: 'Tyler',
  },
];

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A2BE2',
  },
  artista: {
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
