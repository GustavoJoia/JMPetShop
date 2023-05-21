import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    titulo:{
        position: 'absolute',
        top: '25%',
        fontSize: '2.3em',
        color: '#c46500',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1
    },
    list:{
        position: 'absolute',
        top: '32%'
    }
})

export default style;