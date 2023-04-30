import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import ToDo from "./components/ToDo";
import React, { Component, useState } from "react";

export default function App() {

  const [task, updateTask] = useState("");
    const [tasks, updateTasks] = useState([]);

    const handleAdd = () => {
      if (task.trim()) {
        updateTasks([...tasks, task]);
        updateTask("");
      }
    };

    const handleRenderTask = ({ item }) => (
      <Text style={styles.item}>{item}</Text>
    );

  return (
    
    <>
      
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>To-Do List</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.field}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              onChangeText={(text) => updateTask(text)}
              value={task}
            />
            <TouchableWithoutFeedback onPress={handleAdd}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>ADD</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <FlatList
            data={tasks}
            keyExtractor={(item) => item}
            renderItem={handleRenderTask}
          />
        </View>
      </SafeAreaView>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
  field: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    padding: 10,
    fontSize: 15,
    color: "#333",
    borderRadius: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#00cc99",
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fdfdfd",
  },
  item: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    padding: 10,
    marginTop: 15,
    borderRadius: 3,
  },
  form: {
    flexDirection: "row",
  },
});
