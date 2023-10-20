// import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
  SafeAreaView,
  Platform,
} from "react-native";
import CustomButton from "./components/CustomButton";

export default function App() {
  /*const [dimension, setDimention] = useState({
  window: Dimensions.get("window"),
  });

  useEffect(() => {
    const sub = Dimensions.addEventListener("change", ({ window }) => {
      setDimention({ window });
    });

    return () => {
      sub?.remove();
    };
  }, []);

  const { window } = dimension;
  const windowWidth = window.width;
  const windowHeight = window.height;
  */

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    // --------- Safe Area View is not working in some device -----------
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View
          style={[
            styles.box,
            {
              // width: windowWidth > 500 ? "60%" : "90%",
              // height: windowHeight > 800 ? "60%" : "90%",
            },
          ]}
        >
          <Text
            style={styles.text}
            // style={{ fontSize: windowWidth > 500 ? 50 : 24 }}
          >
            Welcome!
          </Text>
          <CustomButton title="Press Me" onPress={() => alert("Pressed!")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    // justifyContent: "center",
  },
  box: {
    // -------------how to use window here ------------------------
    // width: windowWidth > 500 ? "60%" : "90%",
    // height: windowHeight > 800 ? "60%" : "90%",
    // backgroundColor: "lightgreen",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "red",
        fontSize: 30,
      },
      android: {
        color: "blue",
        fontSize: 40,
      },
    }),
    // fontSize: 60,
  },
});
