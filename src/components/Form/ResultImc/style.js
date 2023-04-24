import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    //contextImc será nosso componente pai
    contextImc: {
        flex: 1,
        marginTop: 40,
        paddingTop: 15,
        alignItems: "center",
        width: "100%",
    },
    //No resultado do caclulo do imc colocaremos esse estilo
    resultImc: {
        fontSize: 48,
        color: "#ff0043",
        fontWeight: "bold",
    },
    //esse sera a frase que exibiremos abaixo do resultado 
    titleResultImc: {
        fontSize: 18,
        color: "#ff0043",
        fontWeight: "bold",
    }
});


export default styles