import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    paddingVertical: 20,

    alignItems: "center"
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 19,
    marginRight: 11
  },
  text: {
    color: "#bd3141",
    fontSize: 14,
    paddingVertical: 20,
    fontWeight: "300",
    backgroundColor: "rgba(0, 0, 0, 0.0)" //transparent
  }
});
