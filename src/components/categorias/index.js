import style from "./style";
import { FlatList } from "react-native";
import categorias from "../../data/categorias";
import Icon from "../cardCategorias";

export default function Categorias(){

    return(
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
    );    

}