// Importa as bibliotecas necessárias do React e do React Native
import { StatusBar } from "expo-status-bar";
import { View, imagesource } from "react-native";
import styles from "./src/styles/styles";
import TouristLocation from "./src/components/TouristLocation";


export default function App() {
  return (
    <View style={styles.container}>
      <TouristLocation
        name="Torre EIffel"
        adress="Champ de Mars, 5 Av. Anatole France, 75007 Paris, França"
        description="Uma torre de cerca de 300 metros de altura."
      imagesource={require("./src/images/torre.jpg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}
