import * as react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Danielcaesar from './artista/Danielcaeser';
import Frankocean from './artista/Frankocean';
import Tyler from './artista/Tyler';
import Sabotage from './artista/Sabotage';
import Artista from './pages/Artista';

const Stack = createStackNavigator();

export default function RotasButtom() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Artista" component={Artista} options = {{headerShown:false}} />
    <Stack.Screen name="Danielcaesar" component={Danielcaesar} options = {{title:"Danielcaesar"}} />
    <Stack.Screen name="Frankocean" component={Frankocean} options = {{title:"Frank Ocean"}} />
    <Stack.Screen name="Sabotage" component={Sabotage} options = {{title:"Sabotage"}} />
    <Stack.Screen name="Tyler" component={Tyler} options = {{title:"Tyler, The Creator"}} />
    </Stack.Navigator>
  );
}

