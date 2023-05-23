import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: '1em',
        paddingRight: '1em',
        marginBottom: '25px'
    },
    icon:{
        height: '6em',
        width: '6em',
        borderRadius: '50%'
    },
    titulo:{
        alignContent: 'center',
        fontWeight: '500',
        fontSize: '1rem',
        marginTop: '5px'
    },
    imagem:{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        borderColor: '#E57C00',
        borderWidth: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    }
})

export default style