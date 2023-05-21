import { StyleSheet, Text, View } from 'react-native';
import fundo from './src/components/fundo';

import Header from './src/components/header';
import Categorias from './src/components/categorias';
import Alimentos from './src/components/alimentos';

export default function App() {
  document.title = 'Início - JM Pet-Shop';
  return (
    <View style={fundo.bg}>
      <Header/>
      <Categorias/>
      <Alimentos/>
    </View>
  );
}