import { View, Text, Image } from 'react-native'

export default function Card(props){

    let v_formatado = props.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    return(
        <View>
            <Image source={require(`../../../assets/${props.foto}`)}/>
            <Text>{props.nome}</Text>
            <Text>{props.marca}</Text>
            <Text>{v_formatado}</Text>
            <Text>{props.quantidade}</Text>
        </View>
    )
}