import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    banner__bg:{
        backgroundColor: '#E57C00',
        width: '100%',
        height: '8%',
        paddingTop: '1em'
    },
    banner__profile:{
        height: '3em',
        width: '3em',
        borderRadius: '50%',
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner__line:{
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '2%',
        paddingLeft: '2%',
        paddingRight: '2%'
    },
    banner__divTitulo:{
        backgroundColor: '#D9D9D9',
        width: '90%',
        height: '55%',
        position: 'absolute',
        top: '75%',
        left: '5%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    banner__userArea:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'space-between'
    },
    banner__welcome:{
        fontSize: '1.1em',
        textAlign: 'right',
        paddingRight: '0.5em'
    },
    banner__nome:{
        color: '#c46500',
        fontFamily: 'Arial',
        marginRight: '0.2em',
        marginLeft: '0.1em',
        fontSize: '1.1em',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1
    },
    banner__slogan:{
        fontSize: '2em',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default style;