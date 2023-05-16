import { Platform, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "pop-bold",
    fontSize: 24,
    color: "black",
    textAlign: "center",
    borderWidth: 4,
    textTransform: Platform.select({ ios: "uppercase", android: "none" }),
    borderColor: "black",
    padding: 8,
    maxWidth: "80%",
  },
});
