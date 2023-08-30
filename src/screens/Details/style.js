import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    img:{
        width: '30vw',
        height: '30vw',
    },
    lateral_div:{
        marginTop: '3vh',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '95vw',
        height: '20vh',
        borderRadius: 10,
    },
    nome:{
        marginTop: '10%',
        fontWeight: 'bold',
        color: "#381d01",
        width: '93%'
    },
    marca:{
        color: '#141414'
    },
    preco:{
        color: 'green',
        marginRight: '2vw'
    },
    card_compra:{
        width: '95vw',
        height: '5vh',
        backgroundColor: '#fff',
        marginTop: '1vh',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '2vw',
        paddingRight: '2vw',
    },
    btn:{
        width: '20%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    icon:{
        color: '#f0f0f0',
        size: '1.2rem',
    },
    card_desc:{
        backgroundColor: '#fff',
        width: '95%',
        height: '50vh',
        marginTop: '1vh',
        borderRadius: 10,
        alignItems: 'center'
    },
    desc_titulo:{
        fontSize: '1.2rem',
        fontWeight: '600',
        textAlign: 'center',
        color: '#000',
        marginBottom: '2vh'
    },
    desc:{
        textAlign: 'justify',
        width: '75%'
    }
})

export default style