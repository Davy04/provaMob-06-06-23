import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default function Info() {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState("");

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      const response = await fetch("https://647e9ce4c246f166da8f31b3.mockapi.io/favoritos");
      const data = await response.json();
      setLista(data);
    } catch (error) {
      console.log(error);
    }
  };

  const adicionarItem = async () => {
    if (novoItem) {
      const novoItemObj = { texto: novoItem, key: Date.now().toString() };

      try {
        const response = await fetch("https://647e9ce4c246f166da8f31b3.mockapi.io/favoritos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(novoItemObj),
        });
        const data = await response.json();
        setLista([...lista, data]);
        setNovoItem("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removerItem = (key) => {
    const novaLista = lista.filter(item => item.key !== key);
    setLista(novaLista);
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.titulo}>Itens</Text>
      </View>

      <View style={styles.conteudo}>
        <TextInput
          style={styles.input}
          value={novoItem}
          onChangeText={text => setNovoItem(text)}
          placeholder="Digite um item..."
          placeholderTextColor="#fff"
        />
        <TouchableOpacity style={styles.button} onPress={adicionarItem}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <FlatList
          data={lista}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.texto}</Text>
              <TouchableOpacity style={styles.removeButton} onPress={() => removerItem(item.key)}>
                <Text style={styles.removeButtonText}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171626",
  },
  conteudo: {
    padding: 20,
  },
  info: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "#171626",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#A4C9FF",
    borderRadius: 4,
    color: "#fff", // Definindo a cor do texto de entrada
  },
  button: {
    backgroundColor: "#171626",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#A4C9FF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  itemText: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: "#171626",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});