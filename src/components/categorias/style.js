import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        //borderWidth: 1,
        alignItems: 'center'
    },
    titulo:{
        //position: 'absolute',
        marginTop: '1.5em',
        fontSize: '2.3em',
        color: '#c46500',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1
    },
    list:{
        height: '100%'
    }
})

export default style;