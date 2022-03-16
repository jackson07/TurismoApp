import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#e1e3e4',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,  
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10, 
    },
    text: {
        textAlign: "center",
        marginBottom: 20,
    },
    img: {
        height: 80,
        width: 300,
    },
    cards: {
        backgroundColor: '#fff',
        width: 320,
        marginBottom: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#979797',
    }
});

export default estilos;