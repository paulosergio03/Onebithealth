import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    //formContext é a area que ficara em torno do nosso form
    formContext: {
      width: "100%",
      height: "100%",
      bottom: 0,
      backgroundColor: "#ffffff",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      alignItems: "center",
      marginTop: 30,
    },
    //form é um componente filho de formContext e nele ficara nossos inputs e etc..
    form: {
      width: "100%",
      height: "auto",
      marginTop: 30,
      padding: 10,
    },
    //formLabel é o nome dos nossos inputs que ficara acima deles
    formLabel: {
      color: "#000000",
      fontSize: 18,
      paddingLeft: 20,
    },
    //aqui o estilos dos nosso inputs, personalizados com bordas arredondadas 
    input: {
      width: "90%",
      borderRadius: 50,
      borderColor: "#ffffff",
      backgroundColor: "#f6f6f6",
      height: 40,
      margin: 12,
      borderWidth: 1,
      paddingLeft: 10,
    },
    //buttonCalculator e o botao que irá chamar a função do calculo de imc 
    buttonCalculator: {
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      backgroundColor: "#FF0043",
      paddingTop: 14,
      paddingBottom: 14,
      marginLeft: 12,
      marginTop: 30,
    },
    //textButtonCalculator é responsáve por por estilizar o texto dentro dentro do button
    textButtonCalculator: {
      fontSize: 20,
      color: "#ffffff",
    },
  });
   
  //Lembre-se sempre do export default.
  //sem ele o seu estilo nao será exibino no seu componente.
  export default styles