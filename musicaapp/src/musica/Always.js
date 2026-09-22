import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Always() {
  const letra = 
`Baby, baby
There will always be space for you and me
Right where you left it
And just maybe
Enough time will pass
We'll look back and laugh
Just don't forget it

And maybe I'm wrong
For writing this song
Losing my head over you

(Oh) and I'll be here, 'cause we both know how it goes
I don't want things to change, I pray they stay the same, always
(Oh) and I don't care if you're with somebody else
I'll give you time and space, just know I'm not a phase
I'm always, —ways, —ways
Always, —ways, —ways
I'm always, —ways, —ways

Pretty lady, used to walk with me
Down Bloor Street, oh, what a time
And I still remember the fussing, the fighting, the fuckin', the lying
It's all fine, you'll always be mine

And maybe I'm wrong (hey, babe, you could)
For writing this song (write me a song?)
Losing my head over you

(Oh) and I'll be here, 'cause we both know how it goes
I don't want things to change, I pray they stay the same, always
(Oh) and I don't care if you're with somebody else
I'll give you time and space, just know I'm not a phase
I'm always, —ways, —ways
Always, —ways, —ways
I'm always, —ways, —ways

(Always) can count on it, sure as the stars in the sky
(Always) you can count on it, sure as the Sun will rise
(Always) my love for you ain't going nowhere
(Always) I'll be here`;

  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Always</Text>
        <Text style={estilo.subtitulo}>
        Daniel Caesar
        </Text>

        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            {letra}
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
    paddingBottom: 30,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFC0CB',
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 20,
    textAlign: 'center',
    color: '#E6E6FA',
    marginBottom: 20,
  },
  resumo: {
    marginHorizontal: 25,
    backgroundColor: '#ffffff70',
    borderRadius: 7,
    padding: 12,
  },
  textoResumo: {
    fontSize: 16,
    lineHeight: 27,
    color: '#FFFFE0',
  },
});