import { View, Text, FlatList } from 'react-native'
import style from './style'
import acessorios from '../../data/acessorios'

import Card from '../cardProdutos'

export default function Acessorios(){
    return(
        <View style={style.container}>
            <Text style={style.titulo}>Acessórios</Text>
            <FlatList
                style={style.list}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                data={acessorios}
                keyExtractor={(item)=>item.id}
                renderItem={({item}) =>(
                    <Card
                        nome={item.nome}
                        marca={item.marca}
                        preco={item.preco}
                        adicional={item.tamanho}
                        foto={item.foto}
                        estoque={item.estoque}
                    />
                )}
            />
        </View>
    )
}