import React from "react";
import { StyleSheet, View, SectionList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Text, Title, Card, Appbar } from "react-native-paper";

const DATA = [
  { title: "Main dishes", data: ["Pizza", "Burger", "Risotto"] },
  { title: "Sides", data: ["French Fries", "Onion Rings", "Fried Shrimps"] },
  { title: "Drinks", data: ["Water", "Coke", "Beer"] },
  { title: "Desserts", data: ["Cheese Cake", "Ice Cream"] },
];

const names = [
  "Daisy Lambert", "Mario Cummings", "Nylah Dickerson", "Flynn Costa",
  "Robin Kerr", "Louie Francis", "Daniella Kennedy", "Maxwell Jaramillo",
  "Guadalupe Avila", "Jaylen Morse", "Kairi Roach", "Caspian Crawford",
  "Aubree Hail", "Hector Palacios", "Bria Clay", "Yosef Juarez",
  "Juliet Ponce", "Langston Sanchez", "Aria Person", "Moses Leach",
  "Martha Ruiz", "Austin Vance", "Maxine Bates", "Ellis Wilcox", "Ashlyn Santos",
  "Walker Gilbert", "Jocelyn Phillips", "Andrew Ortiz", "Anna Rivers",
  "Bear Huffman", "Hayley Crosby", "Tristen Cisneros", "Janelle Meadows",
  "Wayne Hampton", "Leona Vang", "Jimmy Oliver", "Camille Kramer", "Kylan Cole",
  "Margaret Brewer", "Cruz Garza", "River Marquez", "Malakai McKinney",
  "Gwendolyn Hahn", "Kabir Jensen", "Jane Martin", "Mateo Ramos", "Alice Finley",
  "Calum Espinoza", "Lucille Levy", "Harold Gibbs"
];

const sectionNames = [];
(() => {
  names.forEach((name) => {
    const firstLetter = name[0];
    if (!sectionNames.find((value) => value.title === firstLetter)) {
      sectionNames.push({
        title: firstLetter,
        data: [],
      });
    }
    sectionNames.find((value) => value.title === firstLetter).data.push(name);
    sectionNames.sort((a, b) => a.title.localeCompare(b.title));
    sectionNames.forEach((section) => {
      section.data.sort();
    });
  });
})();

export const SectionListExample = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={["top"]}>
      <SectionList
        sections={sectionNames}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.itemText}>{item}</Text>
            </Card.Content>
          </Card>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Appbar.Header style={styles.header}>
            <Appbar.Content title={title} titleStyle={styles.headerText} />
          </Appbar.Header>
        )}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  card: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#e0f7fa",
  },
  itemText: {
    fontSize: 18,
    color: "#00796b",
  },
  header: {
    backgroundColor: "#004d40",
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
