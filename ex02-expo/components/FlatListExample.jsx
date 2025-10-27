import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FlatList } from "react-native";
import { Button, Card, Text, TextInput, Switch } from "react-native-paper"; // Usando React Native Paper
import { StatusBar } from "expo-status-bar";

const DATA = [
  { id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba", title: "First Item" },
  { id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63", title: "Second Item" },
  { id: "58694a0f-3da1-471f-bd96-145571e29d72", title: "Third Item" },
];

(() => {
  for (let i = 4; i < 100; i++) {
    DATA.push({ id: `id-${i}`, title: `Item ${i}` });
  }
})();

// Componente de cada item na lista
const Item = ({ title, onDelete, onCheck, task }) => (
  <Card style={styles.card}>
    <Card.Content>
      <Text style={styles.title}>{title}</Text>
      <Switch
        value={task.done}
        onValueChange={() => onCheck(task)}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor="#f5dd4b"
      />
      <Button
        icon="delete"
        mode="contained"
        onPress={() => onDelete(task.id)}
        style={styles.deleteButton}
      >
        Delete
      </Button>
    </Card.Content>
  </Card>
);

export const FlatListExample = () => {
  const [description, setDescription] = useState("");

  // Função de adicionar tarefa
  const addTask = () => {
    DATA.push({ id: Date.now().toString(), title: description, done: false });
    setDescription(""); // Limpar campo após adicionar
  };

  // Função para deletar tarefa
  const deleteTask = (taskId) => {
    const index = DATA.findIndex((task) => task.id === taskId);
    if (index !== -1) DATA.splice(index, 1); // Remover da lista
  };

  // Função para marcar como feito
  const updateTask = (task) => {
    task.done = !task.done; // Alterna o status da tarefa
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* StatusBar para customizar o topo */}
        <StatusBar style="dark" />
        
        <TextInput
          label="Add a new task"
          value={description}
          onChangeText={setDescription}
          mode="outlined"
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={addTask}
          style={styles.addButton}
        >
          Add Task
        </Button>

        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              task={item}
              onDelete={deleteTask}
              onCheck={updateTask}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

// Estilos usando o React Native Paper
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    marginBottom: 12,
  },
  addButton: {
    marginBottom: 20,
  },
  deleteButton: {
    marginTop: 12,
    backgroundColor: "#e74c3c",
  },
});
