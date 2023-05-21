import { TouchableOpacity, View, Text, Image } from "react-native";

export default function IconCategoria(props){

    return(
        <TouchableOpacity>
            <View>
                <Image source={require(`../../../assets/${props.foto}`)} />
            </View>
            <Text>{props.nome}</Text>
        </TouchableOpacity>
    )

}