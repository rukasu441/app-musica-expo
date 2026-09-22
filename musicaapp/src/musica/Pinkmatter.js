import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Pinkmatter() {
  const letra = 
`And the peaches and the mangos that you could sell for me

What do you think my brain is made for?
Is it just a container for the mind?
This great grey matter
Sensei replied: What is your woman?
Is she just a container for the child?
That soft pink matter

Cotton candy, Majin Boo, ooh, ooh, ooh
Close my eyes and fall into you, you, you
My God, she's giving me pleasure
What on Earth?

What if the sky and the stars are for show
And the aliens are watching live
From the purple matter?
Sensei went quiet, then violent
And we sparred until we both grew tired
Nothing mattered

Cotton candy, Majin Boo, ooh, ooh, ooh
Dim the lights and fall into you, you, you
My God, giving me pleasure, pleasure
Pleasure, pleasure
Pleasure over matter

(Hey, hey)

Since you been gone, I been havin' withdrawals
You were such a habit to call
I ain't myself at all, had to tell myself: Naw
She better with some fella with a regular job
I didn't wanna get her involved
By dinner, Mister Benjamin was sittin' in awe
Hopped into my car, drove far
Far's too close and I remember my memory's no sharp
Butter knife, what a life, anyway
I'm buildin' y'all a clock, stop, what am I? Hemingway?
She had the kind of body that would probably intimidate
Any of 'em that were unsouthern, not me, cousin
If models are made for modelin'
Thick girls are made for cuddlin'
Switch worlds and we can huddle then
Who needs another friend? I need to hold your hand
You'd need no other man, we'd flee to other lands

(Grey matter)
(Blue used to be my favorite color)
(Now I ain't got no choice)
(Blue matter)

You're good at being bad (yeah)
You're bad at being good (yeah)
For heaven's sakes, go to hell (yeah)
Nah, knock on wood, hey

You're good at being bad (you're bad at being good)
For heaven's sakes, go to hell (knock on wood)
For heaven's sakes, go to hell
Knock, knock, knock, knock on wood

Well, frankly, when that ocean so mu'fucking good
Make her swab the mu'fucking wood
Make her walk the mu'fucking plank
Make her rob a mu'fucking bank
With no mask on and a rusty revolve`;

  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Pink Matter</Text>
        <Text style={estilo.subtitulo}>
        Frank Ocean
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