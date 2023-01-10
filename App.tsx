import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>nome do evento</Text>
      <Text style={styles.eventDate}>Data do evento</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131016",
    flex: 1,
    padding: 24,
  },
  eventName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
    
  },
});
