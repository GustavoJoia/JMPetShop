import { View, Text } from "react-native";
import style from "./style";

export default function Rodape(){
    return(
        <View style={style.container}>
            <View style={style.colunas}>
                <View style={style.coluna}>
                    <View>
                        <Text style={style.titulo}>Contato:</Text>
                        <Text style={style.contatos}>(11) 1800-2828</Text>
                        <Text style={style.contatos}>Rua Igarapé Água Azul, 70</Text>
                        <Text style={style.contatos}>jmciapet@comercial.com</Text>
                    </View>
                </View>
                <View style={style.coluna}>
                    <View style={style.mapa}>
                        <Text>Um mapa representativo aqui</Text>
                    </View>
                </View>
            </View>
            <Text style={style.creditos}>Gustavo Joia e Luana Macedo</Text>
        </View>
    )
}