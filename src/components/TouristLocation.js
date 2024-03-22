// Importa as bibliotecas necessárias do React e do React Native
import { View, Text, Image } from "react-native";
import styles from "../styles/styles";

//exporta o componente para ser utilizado posteriormente
export default function TouristLocation({
  name,
  adress,
  description,
  imagesource,
}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={imagesource} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.adress}>{adress}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}