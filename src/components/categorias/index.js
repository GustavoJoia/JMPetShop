import style from "./style";
import { FlatList } from "react-native";
import categorias from "../../data/categorias";

export default function Parceiros(){

    <FlatList
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        data = {categorias}
        keyExtractor={(item)=> item.id}
    />

}