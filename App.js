import { View } from 'react-native';
import fundo from './src/components/fundo';

import Header from './src/components/header';
import Categorias from './src/components/categorias';
import Alimentos from './src/components/alimentos';
import Brinquedos from './src/components/brinquedos';
import Acessorios from './src/components/acessorios';
import Rodape from './src/components/rodape';

export default function App() {
  document.title = 'Início - JM Pet-Shop';
  return (
    <View style={fundo.wrapper}>
      <View style={fundo.bg}>
        <Header/>
        <Categorias/>
        <Alimentos/>
        <Brinquedos/>
        <Acessorios/>
        <Rodape/>
      </View>
    </View>
    
  );
}