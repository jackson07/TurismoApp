import React from 'react';
import { Text, View, Image, Button } from 'react-native';

import Capa from '../.././assets/01.png'
import estilos from './style';

const TelaInicial = (props) => {

  const AbrirTelaRestaurante = () => {
    props.navigation.navigate('Restaurantes');
  }
  const AbrirTelaPasseios = () => {
    props.navigation.navigate('Passeios');
  }
  const AbrirTelaHospedagem = () => {
    props.navigation.navigate('Hospedagens');
  }

  return (
    <View style={ estilos.container }>
        <Text style={ estilos.titulo }>Paraty</Text>
        <Text style={ estilos.text }>Saiba o que visitar em Paraty.</Text>
        <Image style={ estilos.img } source={ Capa } /> 

        <View style={ estilos.boxBotao }>
          <Button title="VER RESTAURANTES" onPress={ AbrirTelaRestaurante } color="#808000" />
        </View>
        <View style={ estilos.boxBotao }>
          <Button title="VER PASSEIOS" onPress={ AbrirTelaPasseios } color="#808000" />
        </View>
        <View style={ estilos.boxBotao }>
          <Button title="VER HOSPEDAGEM" onPress={ AbrirTelaHospedagem } color="#808000" /> 
        </View>           
    </View>
  );
}

export default TelaInicial;