import * as react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Always from './musica/Always';
import Munra from './musica/Munra';
import Pinkmatter from './musica/Pinkmatter';
import Seeyouagain from './musica/Seeyouagain';
import Musica from './pages/Musica';

const Stack = createStackNavigator();

export default function RotasButtomMusica() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Musica" component={Musica} options = {{headerShown:false}} />
    <Stack.Screen name="Always" component={Always} options = {{title:"Always"}} />
    <Stack.Screen name="Munra" component={Munra} options = {{title:"Mun Rá"}} />
    <Stack.Screen name="Pinkmatter" component={Pinkmatter} options = {{title:"Pink Matter"}} />
    <Stack.Screen name="Seeyouagain" component={Seeyouagain} options = {{title:"See you Again"}} />
    </Stack.Navigator>
  );
}

