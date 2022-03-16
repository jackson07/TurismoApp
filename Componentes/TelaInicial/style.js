import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e3e4',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 25,
        marginVertical: 100 ,
        borderRadius: 10,
        borderColor: 'black',   
        borderWidth: 0.3,
        borderColor: '#979797',
        padding: 10
    },
    img: {
        width: 320,
        height: 250,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 5,
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    boxBotao: {        
        width: '100%',
        margin: 10,          
    },
});

export default estilo;