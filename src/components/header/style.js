import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    banner__bg:{
        backgroundColor: '#E57C00',
        width: '100%',
        height: '8%',
        paddingTop: '1em',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
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
        backgroundColor: '#f0f0f0',
        width: '90%',
        height: '55%',
        position: 'absolute',
        top: '75%',
        left: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20px'
    },
    banner__userArea:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'space-between',
        marginRight: "10px"
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
        fontSize: '1.1em',
        fontWeight: '600'
    },
    banner__slogan:{
        fontSize: '2em',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        fontWeight: '400',
        color: '#0d0d0d'
    },
    menu:{
        color: "white",
        marginLeft: "10px"
    }
})

export default style;