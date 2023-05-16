import { View, StyleSheet, useWindowDimensions } from "react-native";

import Colors from "../../constants/colors";

function Card({ children }) {
  const { width, height } = useWindowDimensions();
  const marginTopDistance = height < 380 ? 0 : 100;

  return (
    <View style={[styles.card, { marginTop: marginTopDistance }]}>
      {children}
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
