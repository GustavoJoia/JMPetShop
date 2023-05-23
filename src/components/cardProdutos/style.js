import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    card:{
        width: 180,
        height: 280,
        paddingTop: 10,
        paddingBottom: '1em',
        paddingLeft: '1em',
        backgroundColor: '#ee8711ec',
        borderRadius: '5%',
        marginRight: '10px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    imagemIcon:{
        width: '90%',
        height: '50%',
        justifyContent: 'center',
        flex: 1
    },
    imagem:{
        width: '100%',
        height: '100%',
        borderRadius: '5%'
    },
    nome:{
        marginTop: '10%',
        fontSize: '1.1em',
        fontWeight: '500',
        color: "#381d01",
        width: '93%'
    },
    marca:{
        color: '#fcf0e1'
    },
    preco:{
        color: 'green'
    }

})

export default style