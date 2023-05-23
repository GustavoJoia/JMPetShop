import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import estilo from './style'

export default function Card(props){

    let msg = {color: ''}
    let msg_estoque
    if(props.estoque<=0){
        msg_estoque = 'Esgotado'
        msg.color = 'red'
    } else if(props.estoque>=1 && props.estoque<=10){
        msg.color = '#4f4f4e'
        if(props.estoque==1){
            msg_estoque = '1 restante'
        } else {
            msg_estoque = props.estoque+' restantes'
        }
    } else {
        msg.color = '#4f4f4e'
        msg_estoque = props.estoque+' restantes'
    }

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
            <Text style={{color: msg.color}}>{msg_estoque}</Text>
        </TouchableOpacity>
    )
}