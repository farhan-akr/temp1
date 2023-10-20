import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Modal,
  Button,
  ActivityIndicator,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const TempCard = ({ title, id }) => {
  return (
    <ScrollView>
      <View style={styles.HeadingContainer}>
        <Text style={styles.Heading}>{title}</Text>
        <Text style={styles.Heading}>{id}</Text>
      </View>
    </ScrollView>
  );
};

export default function App() {
  const [isModelVisible, setIsModelVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Open Model" onPress={() => setIsModelVisible(true)} />

      {/* Model */}
      <Modal
        visible={isModelVisible}
        onRequestClose={() => setIsModelVisible(false)}
        animationType="slide"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue" }}>
          <Text>Modal Container</Text>
          <Button title="Close" onPress={() => setIsModelVisible(false)} />
        </View>
      </Modal>
      <StatusBar
        backgroundColor={"lightblue"}
        barStyle={"dark-content"}
        // hidden
      />

      <ActivityIndicator size={"large"} />
      <ActivityIndicator size={"large"} color={"black"} />
      <ActivityIndicator size={"large"} color={"black"} animating={false} />

      {/* <FlatList
        data={DATA}
        renderItem={({ item }) => <TempCard title={item.title} id={item.id} />}
        keyExtractor={(item) => item.id}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  HeadingContainer: {
    backgroundColor: "grey",
    color: "white",
  },
  Heading: {
    padding: 5,
    borderWidth: 1,
    borderColor: "red",
    color: "white",
    margin: 2,
  },
});
