import { View, TouchableOpacity, Text } from "react-native";
import style from "./style";
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={style.banner__bg}>

            <View style={style.banner__line}>

                <TouchableOpacity>
                    <Foundation name="list" size={'2em'} color="black" />
                </TouchableOpacity>
                <View style={style.banner__userArea}>
                    <Text>Bem vindo, (...)</Text>
                    <TouchableOpacity>
                        <View style={style.banner__profile}>
                            <Ionicons name="person" size={'2em'} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={style.banner__divTitulo}>
                <Text style={style.banner__nome}>
                    J.M. & Cia:
                </Text>
                <Text>
                    Ração, banho, tosa e creche!
                </Text>
            </View>

        </View>
    );
}