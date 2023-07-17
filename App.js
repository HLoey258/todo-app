import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Header from "./.expo/components/Header";
import { FlatList } from "react-native";
import Item from "./.expo/components/Item";
import AddTodo from "./.expo/components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "do 1xd", key: "1" },
    { text: "do 2", key: "2" },
    { text: "do 3", key: "3" },
    { text: "do 4", key: "4" },
  ]);
  const pressHandle = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
    if (text.length > 3) {
      Alert.alert("Notification", "Add successful", [
        {
          text: "Add more",
          onPress: () => {
            console.log("add more todo");
          },
        },
        {
          text: "cancel",
          onPress: () => {
            console.log("canceled");
          },
        },
      ]);
    } else {
      Alert.alert("Notification", "You must type at least more 3 letters", [
        {
          text: "Ok",
          onPress: () => {
            console.log("canceled and type again");
          },
        },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("keyboard dimiss");
      }}
    >
      <View style={styles.container}>
        <Header></Header>
        <AddTodo submitHandler={submitHandler}></AddTodo>
        <View style={styles.body}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Item item={item} pressHandle={pressHandle} />
            )}
          />
        </View>
        {/* <View style={styles.bottom}>
        <Text>Just a botjjtom</Text>
      </View>
      <StatusBar style="auto" /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    marginTop: 40,
    marginHorizontal: 10,
  },
  bottom: {
    backgroundColor: "orange",
    padding: 20,
  },
  content: {
    backgroundColor: "red",
    padding: 40,
  },
  button: {
    backgroundColor: "grey",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
});
