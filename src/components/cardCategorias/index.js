import { TouchableOpacity, View, Text, Image } from "react-native";
import style from "./style";

export default function IconCategoria(props){

    return(
        <TouchableOpacity style={style.container}>
            <View style={style.icon}>
                <Image style={style.imagem} source={require(`../../../assets/${props.foto}`)} />
            </View>
            <Text style={style.titulo}>{props.nome}</Text>
        </TouchableOpacity>
    )

}