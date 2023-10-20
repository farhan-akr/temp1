import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar as stbar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.bgBlue]}>
        <Text>Box 1</Text>
      </View>
      <View style={[styles.box, styles.bgYellow]}>
        <Text>Box 2</Text>
      </View>
      <View style={[styles.box, styles.bgPink]}>
        <Text>Box 3</Text>
      </View>
      <View style={[styles.box, styles.bgLightBlue]}>
        <Text>Box 4</Text>
      </View>
      <View style={[styles.box, styles.bggreen]}>
        <Text>Box 5</Text>
      </View>
      <View style={[styles.box, styles.bgGrey]}>
        <Text>Box 6</Text>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    flexDirection: "column", //Default
    // flexDirection: "column-reverse",
    // flexDirection: "row-reverse",
    // flexDirection: "row",
    // justifyContent: "flex-end", //Default
    justifyContent: "center",
    // justifyContent: "space-between",
    // justifyContent: "space-around",
    // justifyContent: "space-evenly",
    // alignItems: "stretch", //Default
    alignItems: "center",
    // alignItems: "flex-start",
    // alignItems: "flex-end",
    // alignItems: "baseline",
    marginTop: stbar.currentHeight,
  },
  box: {
    height: 100,
    // width: 300,
  },
  bgBlue: {
    backgroundColor: "blue",
    // paddingVertical: 40,
  },
  bgYellow: {
    backgroundColor: "yellow",
    // alignSelf: "flex-start",
  },
  bgPink: {
    backgroundColor: "pink",
    // alignSelf: "flex-end",
  },
  bgLightBlue: {
    backgroundColor: "lightblue",
    // alignSelf: "stretch",
  },
  bggreen: {
    backgroundColor: "green",
  },
  bgGrey: {
    backgroundColor: "grey",
  },
});
