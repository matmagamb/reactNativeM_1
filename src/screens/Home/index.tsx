import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

function HandleParicipantAdd() {
  console.log("vc adicionou um participante ");
}

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>nome do evento</Text>
      <Text style={styles.eventDate}>Data do evento</Text>
      <TextInput
        style={styles.input}
        placeholder="nome do participante"
        placeholderTextColor="#6b6b6b"
      />
      <TouchableOpacity style={styles.button} onPress={HandleParicipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
