import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 24,
    paddingHorizontal: 26,
    flex: 1,
    justifyContent: "center",
  },
  esqueceuSenha: {
    // alignItems: "flex-end",
    alignSelf: "stretch",
    marginBottom: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#d3d3d3",
    padding: 15,
    borderRadius: 10
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  input: {
    alignSelf: "stretch",
  },
  label: {
    color: "black",
  },
  link: {
    fontWeight: "bold",
    color: "white",
  },
});