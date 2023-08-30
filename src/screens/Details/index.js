import style from "./style";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';

export default function Details(){

    const route = useRoute()
    const data = route.params
    console.log(data)

    let msg = {color: ''}
    let msg_estoque
    if(data.estoque<=0){
        msg_estoque = 'Esgotado'
        msg.color = 'red'
    } else if(data.estoque>=1 && data.estoque<=10){
        msg.color = '#4f4f4e'
        if(data.estoque==1){
            msg_estoque = '1 restante'
        } else {
            msg_estoque = data.estoque+' restantes'
        }
    } else {
        msg.color = '#4f4f4e'
        msg_estoque = data.estoque+' restantes'
    }

    let v_formatado = data.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    return(
        <View style={style.container}>
            <View style={style.lateral_div}>
                <Image style={style.img} source={require(`../../../assets/${data.foto}`)}/>
                <View style={style.info_area}>
                    <Text style={style.nome}>{data.nome}</Text>
                    <Text style={style.marca}>{data.marca}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={style.preco}>{v_formatado}</Text>
                        <Text style={style.adicional}>{data.adicional}</Text>
                    </View>
                    <Text style={{color: msg.color}}>{msg_estoque}</Text>
                </View>
            </View>
            <View style={style.card_compra}>
                <TouchableOpacity style={[style.btn,{backgroundColor: 'green'}]}>
                    <Entypo name="shopping-bag" size={style.icon.size} color={style.icon.color} />
                </TouchableOpacity>
                <TouchableOpacity style={[style.btn,{backgroundColor: 'green'}]}>
                    <Entypo name="shopping-cart" size={style.icon.size} color={style.icon.color} />
                </TouchableOpacity>
            </View>
            <View style={style.card_desc}>
                <Text style={style.desc_titulo}>{data.nome}</Text>
                <Text style={style.desc}>Em breve...</Text>
            </View>
        </View>
    )
}