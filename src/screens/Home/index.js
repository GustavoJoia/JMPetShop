import { View } from 'react-native';
import fundo from '../../components/fundo';

import Header from '../../components/header';
import Categorias from '../../components/categorias';
import Alimentos from '../../components/alimentos';
import Brinquedos from '../../components/brinquedos';
import Acessorios from '../../components/acessorios';
import Rodape from '../../components/rodape';

export default function Home() {
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