import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.secondary500,
    textAlign: "center",
    borderWidth: 4,
    borderColor: Colors.secondary500,
    padding: 8,
  },
});
