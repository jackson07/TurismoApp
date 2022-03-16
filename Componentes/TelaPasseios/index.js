import React from 'react';
import { Text, View, Image } from 'react-native';

import img1 from '../.././assets/passeios/passeio01.png';
import img2 from '../.././assets/passeios/passeio02.png';
import img3 from '../.././assets/passeios/passeio03.png';

import estilos from './style';

const TelaPasseios = (props) => {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Passeios em Paraty</Text>
      <Text style={ estilos.text }>
        O município de Paraty está quase inteiro em área de parques e 
        de preservação ambiental. Muitas são as opções de passeios para 
        quem curte a natureza: passeios de jeep, de bike, caminhadas 
        por trilhas entre outros. Veja dois exemplos:
      </Text>
        
      <View style={ estilos.cards }>
        <Text style={ estilos.titulo }>Tirolesa</Text>
        <Image style={ estilos.img } source={ img1 } />
      </View>
      <View style={ estilos.cards }>
      <Text style={ estilos.titulo }>Rafting</Text>
        <Image style={ estilos.img } source={ img2 } />  
      </View>
      <View style={ estilos.cards }>
        <Text style={ estilos.titulo }>Canoagem no mangue</Text>
        <Image style={ estilos.img } source={ img3 } />   
      </View>
    </View>
  );
};

export default TelaPasseios;