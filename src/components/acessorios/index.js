import { View, Text, FlatList } from 'react-native'
import style from './style'
import alimentos from '../../data/alimentacao'

import Card from '../cardProdutos'

export default function Alimentos(){
    return(
        <View style={style.container}>
            <Text style={style.titulo}>Rações e Petiscos</Text>
            <FlatList
                style={style.list}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                data={alimentos}
                keyExtractor={(item)=>item.id}
                renderItem={({item}) =>(
                    <Card
                        nome={item.nome}
                        marca={item.marca}
                        preco={item.preco}
                        quantidade={item.quantidade}
                        foto={item.foto}
                    />
                )}
            />
        </View>
    )
}