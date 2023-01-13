import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

function HandleParicipantAdd() {
  console.log("vc adicionou um participante ");
}
function HandleParicipantRemove(name: string) {
  console.log(`"vc removeu um participante ${name}"`);
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
