import { View, Text } from "react-native";
import style from "./style";

export default function Rodape(){
    return(
        <View style={style.container}>
            <View style={style.colunas}>
                <View style={style.coluna}>
                    <View>
                        <Text style={{color: '#fdfdfd'}}>(11) 1800-2828</Text>
                        <Text style={{color: '#fdfdfd'}}>Rua Igarapé Água Azul, 78</Text>
                        <Text style={{color: '#fdfdfd'}}>jmciapet@comercial.com</Text>
                    </View>
                </View>
                <View style={style.coluna}></View>
            </View>
            <Text style={style.creditos}>Gustavo Joia e Luana Macedo</Text>
        </View>
    )
}