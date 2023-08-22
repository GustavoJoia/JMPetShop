import style from "./style";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Details(){

    const route = useRoute()
    const data = {nome:route.params.nome,marca:route.params.marca,preco:route.params.preco,adicional:route.params.adicional,estoque:route.params.estoque,foto:route.params.foto}
    console.log(data)


    return(
        <View style={style.container}>

        </View>
    )
}