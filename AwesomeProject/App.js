import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Button,
  Alert,
  Switch,
  Pressable,
} from "react-native";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [enable, setEnable] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Scroll View */}
      <ScrollView>
        {/* View */}
        <View style={styles.header}>
          <Text style={{ fontSize: 30 }}>Header</Text>
        </View>

        <View style={styles.imageStyle}>
          {/* Image */}
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2023/10/01/19/14/pumpkins-8287968_1280.jpg",
            }}
            style={{ width: 300, height: 200 }}
          />
        </View>

        <View>
          {/* Text Input */}
          <TextInput
            style={styles.inputs}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Enter First Name"
          />
        </View>

        <View>
          <Text style={[styles.header, styles.inputText]}>{firstName}</Text>
        </View>

        <View>
          {/* Button */}
          <Button
            title="Click Me"
            onPress={() => Alert.alert("Button Clicked")}
            color={"#de4040"}
          />
        </View>

        <View style={styles.imageStyle}>
          {/* Pressable */}
          <Pressable onPress={() => Alert.alert("Image Clicked")}>
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2023/10/01/19/14/pumpkins-8287968_1280.jpg",
              }}
              style={{ width: 300, height: 200 }}
            />
          </Pressable>
        </View>

        <View>
          <Switch
            trackColor={{ false: "blue", true: "red" }}
            thumbColor={enable ? "grey" : "black"}
            value={enable}
            onValueChange={() => setEnable((previousState) => !previousState)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },
  header: {
    fontWeight: 500,
    alignItems: "center",
  },
  inputs: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 6,
  },
  inputText: {
    color: "#a440de",
    alignSelf: "center",
    fontSize: 30,
  },
  imageStyle: {
    marginTop: 20,
  },
});

export default App;
