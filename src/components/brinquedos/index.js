import { View, Text, FlatList } from 'react-native'
import style from './style'
import brinquedos from '../../data/brinquedos'

import Card from '../cardProdutos'

export default function Brinquedos(){
    return(
        <View style={style.container}>
            <Text style={style.titulo}>Brinquedos</Text>
            <FlatList
                style={style.list}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                data={brinquedos}
                keyExtractor={(item)=>item.id}
                renderItem={({item}) =>(
                    <Card
                        nome={item.nome}
                        marca={item.marca}
                        preco={item.preco}
                        adicional={item.tamanho}
                        foto={item.foto}
                    />
                )}
            />
        </View>
    )
}