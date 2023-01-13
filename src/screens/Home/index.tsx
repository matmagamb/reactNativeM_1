import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

function HandleParicipantAdd() {
  if (participants.includes("1")) {
    return Alert.alert(
      "participante ja criado",
      "Ja existe um participante na lista com esse nome "
    );
  }
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

const participants = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
];

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>nome do evento</Text>
      <Text style={styles.eventDate}>Data do evento</Text>
      <View style={styles.form}>
        <TextInput
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
