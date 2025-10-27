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
    <View style={styles.fullContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <LinearGradient colors={['#b2f7ef', '#ade8f4']} style={styles.gradientBackground}>
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.title}>Oi!</Title>
              <View style={styles.avatarWrapper}>
                <Avatar.Image
                  size={100}
                  source={require("@/assets/images/avatar.jpg")}
                  style={styles.avatar}
                />
              </View>
              <Paragraph
                numberOfLines={showDetails ? 0 : 1}
                onPress={() => setShowDetails(!showDetails)}
                style={styles.text}
              >
                Este é um App de exemplo da disciplina Programação Web e Mobile do Curso de Ciência da Computação da Universidade Católica de Pernambuco (semestre 2025.2)
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
              />
              <LinearGradient colors={['#006d77', '#83c5be']} style={styles.buttonWrapper}>
                <Button
                  mode="contained"
                  onPress={() => alert("Botão OK pressionado")}
                  buttonColor="transparent"
                  contentStyle={{ height: 50 }}
                  style={styles.button}
                >
                  OK
                </Button>
              </LinearGradient>
              <LinearGradient colors={['#ffb703', '#fb8500']} style={styles.buttonWrapper}>
                <Button
                  mode="contained"
                  onPress={() => alert("Botão Cancel pressionado")}
                  buttonColor="transparent"
                  contentStyle={{ height: 50 }}
                  style={styles.button}
                >
                  Cancel
                </Button>
              </LinearGradient>
              <LinearGradient colors={['#8338ec', '#3a0ca3']} style={styles.buttonWrapper}>
                <Button
                  mode="contained"
                  onPress={() => router.navigate("/taskList")}
                  buttonColor="transparent"
                  contentStyle={{ height: 50 }}
                  style={styles.button}
                >
                  Ir para Lista de Tarefas
                </Button>
              </LinearGradient>
            </Card.Content>
          </Card>
        </LinearGradient>
      </ScrollView>
      <LinearGradient colors={['#ffd6a5', '#ffb4a2']} style={styles.footer}>
        <Paragraph style={styles.footerText}>Rodapé colorido do App</Paragraph>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
  },
  gradientBackground: {
    width: '100%',
    paddingBottom: 30,
  },
  container: {
    alignItems: "center",
    padding: 15,
  },
  card: {
    width: "100%",
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8
  },
  title: {
    color: "#4b0082",
    marginBottom: 15,
    textAlign: "center",
    fontSize: 28
  },
  avatarWrapper: {
    borderRadius: 60,
    padding: 5,
    backgroundColor: "#a0c4ff",
    alignSelf: "center",
    marginVertical: 15
  },
  avatar: {
    borderRadius: 50
  },
  text: {
    marginVertical: 10,
    color: "#333",
    textAlign: "center",
    fontSize: 16
  },
  input: {
    marginVertical: 10,
    backgroundColor: "#e0d4ff",
    borderRadius: 10
  },
  buttonWrapper: {
    marginVertical: 8,
    borderRadius: 25,
    overflow: 'hidden',
    width: '100%'
  },
  button: {
    borderRadius: 25,
  },
  footer: {
    padding: 20,
    alignItems: "center"
  },
  footerText: {
    color: "#333",
    fontWeight: "bold"
  }
});


