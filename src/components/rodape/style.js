import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        backgroundColor: '#363636',
        height: '20%',
        width: '100%'
    },
    colunas:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '100%',
        width: '100%'
    },
    coluna:{
        width: '45%',
        borderWidth: 1
    },
    creditos:{
        backgroundColor: '#363636'
    }
})

export default style