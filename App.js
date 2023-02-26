import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.viewer}>
      <Text style={styles.titulo}>
        Meu Perfil Profissional
      </Text>

      <Image style={styles.img} source={require('./assets/foto_de_perfil.jpg')}/>

      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Dados Pessoais:</Text>
        {'\n'}
        Nome: Ana Beatriz da Conceição Walker
        {'\n'}
        Data de nascimento: 04/11/2001
        {'\n'}
        Gênero: Feminino
      </Text>

      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Formação:</Text>
        {'\n'}
        Faculdade de Tecnologia da Baixada Santista Rubens Lara
        {'\n'}
        Curso: Sistemas Para Internet
        {'\n'}
        Previsão de término: 06/2023
      </Text>

      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Experiência profissional:</Text>
        {'\n'}
        Clear Cloud Software - Praia Grande
        {'\n'}
        Cargo: Estagiária Fullstack React.js e Node.js
        {'\n'}
        Duração: 11/2021 a 04/2022
      </Text>

      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Projetos:</Text>
        {'\n'}
        VidaPet - Sistema de gerenciamento bla bla bla...
        {'\n'}
        Linguagens: Java e Angular
        {'\n'}
        Link: https://vidaPetShowDeBola.com.brasil
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  viewer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFF0',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitulos: {
    fontWeight: 'bold'
  },
  img: {
    borderCorlor: 'black',
    borderRadius: 100,
    width: 200,
    height: 200,
    marginLeft: '20%',
  },
  conteudo: {
    padding: 20,
  },
});
