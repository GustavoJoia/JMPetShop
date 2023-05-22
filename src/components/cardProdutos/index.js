import { View, Text, Image, TouchableOpacity } from 'react-native'
import estilo from './style'

export default function Card(props){

    let v_formatado = props.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    return(
        <TouchableOpacity style={estilo.card}>
            <View style={estilo.imagemIcon}>
                <Image style={estilo.imagem} source={require(`../../../assets/${props.foto}`)}/>
            </View>
            <Text style={estilo.nome}>{props.nome}</Text>
            <Text style={estilo.marca}>{props.marca}</Text>
            <Text style={estilo.preco}>{v_formatado}</Text>
            <Text style={estilo.adicional}>{props.adicional}</Text>
        </TouchableOpacity>
    )
}