import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container:{
        alignItems: 'center'
    },
    titulo:{
        position: 'absolute',
        top: '110%',
        fontSize: '2em',
        color: '#C46500',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1
    },
    list:{
        position: 'relative',
        top: '130%'
    }

})

export default style