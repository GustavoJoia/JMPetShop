import style from "./style";
import { FlatList, Text, View } from "react-native";
import categorias from "../../data/categorias";
import Icon from "../cardCategorias";

export default function Categorias(){

    return(
        <View style={style.container}>
        
            <Text style={style.titulo}>Categorias</Text>
            <FlatList
                style={style.list}
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                data = {categorias}
                contentContainerStyle={{alignItems:'center',paddingLeft: '1em'}}
                keyExtractor={(item)=> item.id}
                renderItem={({item}) =>(
                    <Icon
                        nome={item.nome}
                        foto={item.foto}
                    />
                )}
            />
        
        </View>
    );    

}