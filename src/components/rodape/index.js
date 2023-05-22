import { View } from "react-native";
import style from "./style";

export default function Rodape(){
    return(
        <View style={style.container}>
            <View style={style.colunas}>
                <View style={style.coluna}></View>
                <View style={style.coluna}></View>
            </View>
        </View>
    )
}