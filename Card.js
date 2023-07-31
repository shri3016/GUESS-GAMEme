import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={style.card}>{children}</View>;
}

export default Card;
const style = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 40,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: Colors.primary800,
  },
});
