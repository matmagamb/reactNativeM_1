import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function HandleParicipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "participante ja criado",
        "Ja existe um participante na lista com esse nome "
      );
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function HandleParicipantRemove(name: string) {
    Alert.alert("Remover", `remover o participant ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>nome do evento</Text>
      <Text style={styles.eventDate}>Data do evento</Text>
      <View style={styles.form}>
        <TextInput
          value={participantName}
          onChangeText={(e) => setParticipantName(e)}
          style={styles.input}
          placeholder="nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={HandleParicipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            key={item}
            onRemove={() => HandleParicipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.ListEmptyText}>
            nenhum participante cadastrado
          </Text>
        )}
      />
    </View>
  );
}
