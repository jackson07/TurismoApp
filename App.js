import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './Componentes/TelaInicial/index';
import TelaRestaurantes from './Componentes/TelaRestaurantes/index';
import TelaPasseios from './Componentes/TelaPasseios/index';
import TelaHospedagem from './Componentes/TelaHospedagem/index';

const Stack = createStackNavigator();

const App = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tela Inicial' component={ TelaInicial } />
        <Stack.Screen name='Restaurantes' component={ TelaRestaurantes } />
        <Stack.Screen name='Passeios' component={ TelaPasseios } />
        <Stack.Screen name='Hospedagens' component={ TelaHospedagem } />
      </Stack.Navigator>
    </NavigationContainer>
)

export default App;