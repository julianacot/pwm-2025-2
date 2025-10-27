import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextInput, Button, Card, Paragraph, Title, Avatar } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  const router = useRouter();
  const [idade, setIdade] = useState("");
  const [showDetails, setShowDetails] = useState(true);

  const anoNasc = new Date().getFullYear() - parseInt(idade);

  return (
    <LinearGradient colors={['#3a2591', '#5c3b8e']} style={styles.fullContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>"Descubra seu ano de Nascimento"</Title>
            <View style={styles.avatarWrapper}>
              <Avatar.Image
                size={150} // Aumentei o tamanho da imagem
                source={require("@/assets/images/avatar.jpg")}
              />
            </View>
            <Paragraph
              numberOfLines={showDetails ? 0 : 1}
              onPress={() => setShowDetails(!showDetails)}
              style={styles.text}
            >
              Informe sua idade e calculo para você.
            </Paragraph>
            {!isNaN(anoNasc) && <Paragraph style={styles.text}>Você nasceu em {anoNasc}</Paragraph>}

            <TextInput
              label="Qual a sua idade?"
              value={idade}
              onChangeText={setIdade}
              keyboardType="numeric"
              style={styles.input}
              mode="outlined"
              outlineColor="#004c6d"
              activeOutlineColor="#004c6d"
              textColor="#00333a"
            />

            <Button
              mode="contained"
              onPress={() => alert("Botão OK pressionado")}
              contentStyle={{ height: 50 }}
              buttonColor="#c1d8ff" // Azul claro
              textColor="#00333a"
              style={[styles.button, { borderColor: '#96053c', borderWidth: 2 }]}
            >
              OK
            </Button>

            <Button
              mode="contained"
              onPress={() => alert("Botão Cancel pressionado")}
              contentStyle={{ height: 50 }}
              buttonColor="#c1d8ff" // Azul claro
              textColor="#00333a"
              style={[styles.button, { borderColor: '#96053c', borderWidth: 2 }]}
            >
              Cancel
            </Button>

            <Button
              mode="contained"
              onPress={() => router.push("/taskList")}
              contentStyle={{ height: 50 }}
              buttonColor="#c1d8ff" // Azul claro
              textColor="#00333a"
              style={[styles.button, { borderColor: '#96053c', borderWidth: 2 }]}
            >
              Ir para Lista de Tarefas
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>

      <LinearGradient colors={['#5c3b8e', '#3a2591']} style={styles.footer}>
        <Paragraph style={styles.footerText}>Rodapé roxo do App</Paragraph>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  fullContainer: { flex: 1 },
  container: { alignItems: "center", padding: 15 },
  card: {
    width: "100%",
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: "#3a2591", // fundo do card
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8
  },
  title: { color: "#ffffff", marginBottom: 15, textAlign: "center", fontSize: 28 },
  avatarWrapper: { borderRadius: 60, padding: 5, backgroundColor: "#5c3b8e", alignSelf: "center", marginVertical: 15 },
  text: { marginVertical: 10, color: "#ffffff", textAlign: "center", fontSize: 16 },
  input: { marginVertical: 10, backgroundColor: "#e1f5fe", borderRadius: 10 },
  button: { borderRadius: 25, marginVertical: 8, width: '100%' },
  footer: { padding: 20, alignItems: "center", width: '100%' },
  footerText: { color: "#ffffff", fontWeight: "bold" }
});
