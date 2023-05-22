import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container:{
        alignItems: 'center',
        //borderWidth: 1,
        marginTop: '1em',
        maxWidth: '100%',
        overflow: 'hidden',
        paddingTop: '7%'
    },
    titulo:{
        position: 'relative',
        fontSize: '2em',
        color: '#C46500',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1
    }

})

export default style