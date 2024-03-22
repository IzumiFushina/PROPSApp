// Importa as bibliotecas necessárias do React e do React Native
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#008080",
  },
  image: {
    width: 500,
    height: 500,
    marginBottom: 30,
  },
  name: {
    fontSize: 30,
  },
  adress: {
    fontSize: 25,
    color: "#add8e6",
  },
  description: {
    fontSize: 20,
    color: "#a9a9a9",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});

//exporta o componente para ser utilizado posteriormente
export default styles;