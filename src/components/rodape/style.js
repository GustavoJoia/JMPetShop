import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        backgroundColor: '#363636',
        height: '13%',
        width: '100%',
        marginTop: '15%'
    },
    colunas:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '100%',
        width: '100%'
    },
    coluna:{
        width: '45%',
        justifyContent: 'space-around'
        //borderWidth: 1
    },
    titulo:{
        fontSize: '2em',
        marginBottom: '10%',
        color: '#E57C00'
    },
    contatos:{
        color: '#fdfdfd',
        borderBottomColor: '#fdfdfd',
        borderBottomWidth: 1
    },
    creditos:{
        backgroundColor: '#363636',
        borderColor: '#363636',
        borderWidth: 1,
        textAlign: 'center',
        color: '#fdfdfd'
    },
    mapa:{
        backgroundColor: '#fdfdfd',
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
})

export default style