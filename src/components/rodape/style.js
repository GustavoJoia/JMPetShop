import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        backgroundColor: '#363636',
        height: '13%',
        width: '100%',
        marginTop: '15%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
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
        marginBottom: '6%',
        color: '#E57C00',
        fontWeight: '500',
        marginLeft: '4%'
    },
    contatos:{
        color: '#fdfdfd',
        fontSize: '0.9rem',
        marginLeft: '4%'
    },
    creditos:{
        backgroundColor: '#363636',
        borderColor: '#363636',
        borderWidth: 1,
        textAlign: 'center',
        color: '#aba9a9',
        fontWeight: '500'
    },
    mapa:{
        backgroundColor: '#fdfdfd',
        width: '95%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
})

export default style