import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Munra() {
  const letra = 
`Menina Leblon, vermelho batom
Foi vista com Jow, malhando na praça
Sabote, Canão, convoca no som
A paz pros irmãos de toda quebrada

Sabotage, mano Anísio
Eu vejo diabólico, confiro, analiso
Um branco e um preto unido
Respostas que calam o ridículo

Vejo assim, confisco, mundo submisso
Eu adquiro alívio, paz para os meu filhos
Na decente, atenciosamente eu sigo em frente, tipo assim
Regenerado delinquente lá do Brooklyn

Não sou Mun-rá mas tenho sim uns pit bull por mim
Sei que até lá, liberdade já, pros meus irmãozinhos
Representei quando um verdinho na mente eu queimo
Não desandei, eu me empenhei, me dediquei também
Conheço o povo, de sampa, RJ, BH, baixada, porto

Sou gavião fiel de origem louco, nada bobo
Não brigo pelo jogo, sou fogo contra fogo
Mais vale uma família e um qualquer no bolso
Medo, talvez desemprego, sofrimento, lamento
Vai ser demais, vou viver sem paz
Pagar veneno, nas ruas falcatrua zé-povinho

Um isqueiro, o itinerário de um puteiro é o Brasil
Brasileiros se infiltraram, as portas se fecharam
Quem rima está aqui, quem não rima aplaude o adversário
Tipo Jagunço, Chabu, Neguim
Até lá liberdade já pro Nu e o Baianinho

Se liga na fita, Nanato, otários estão maquinados no morro
Falaram que podem atirar na sequência, se pá vão prestarem socorro
Mas abre olho, o cara piolho é sempre um mano dos nossos
O inimigo meu tem Astra, barca, Blazer, também tem moto
Sul Canão meu bairro, pinotei não deixei rastro
Comentaram, sim, forjaram que eu vi, doze parangas no bafo

No bairro eu pego meu fino, na fé vinha vindo, na fé vou seguir
Deus que me livre, da mira dos tiras
Mas nego eu não fico, não brinco, nem mosco
Medo, só vejo os destroços
Do pobre que acorda com ódio
O anjo do céu não pode ser réu
Quem vem das ruas, não joga fácil
Tipo invasor tenebroso, fogo contra fogo
Lúcio Flavio louco, o corvo

Sou maloqueiro sou, e lá vou eu, jow
É um dois pra pegar, então polícia sai do pé
Pra meu alívio eu quero um beck
Mais uma vez o enxame quem provoca é o zica

Sou maloqueiro sou, e lá vou eu, jow
É um dois pra pegar, então polícia sai do pé
Pra meu alívio eu quero um beck
Mais uma vez o enxame quem provoca é o zica

Menina Leblon, vermelho batom
Foi vista com Jow, malhando na praça
Sabote, Canão, convoca no som
A paz pros irmãos de toda quebrada

Sabotage, mano Anísio
Eu vejo diabólico, confiro, analiso
Um branco e um preto unido
Respostas que calam o ridículo.
`;

  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Mun Rá</Text>
        <Text style={estilo.subtitulo}>
        Sabotage
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