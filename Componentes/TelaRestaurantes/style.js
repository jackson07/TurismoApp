import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#e1e3e4',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',       
    },
    img: {
        height: 80,
        width: 300,
        marginBottom: 5,
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10        
    },
    text: {
        marginBottom: 10,
        textAlign: "center",
        marginHorizontal: 30,    
    },
    cards: {
        backgroundColor: '#fff',
        width: 320,
        marginBottom: 10,
        borderRadius: 5,
        borderColor: '#979797',
        borderWidth: 0.5,
        margin: 5,
        padding: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    }
});

export default estilos;