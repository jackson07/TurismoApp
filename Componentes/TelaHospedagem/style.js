import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#e1e3e4',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    img: {
        width: 300,
        height: 50,
        marginBottom: 10,
    },
    titulo: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: 'bold',
        marginBottom: 10
    },
    descricao: {
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        width: 320,
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        borderColor: '#979797',
        borderWidth: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    }
});

export default estilos;