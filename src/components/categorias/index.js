import style from "./style";
import { FlatList, Text } from "react-native";
import categorias from "../../data/categorias";
import Icon from "../cardCategorias";

export default function Categorias(){

    return(
        <>
        
        <Text style={style.titulo}>Categorias</Text>
        <FlatList
            style={style.list}
            horizontal = {true}
            showsHorizontalScrollIndicator = {false}
            data = {categorias}
            keyExtractor={(item)=> item.id}
            renderItem={({item}) =>(
                <Icon
                    nome={item.nome}
                    foto={item.foto}
                />
            )}
        />
        
        </>
    );    

}