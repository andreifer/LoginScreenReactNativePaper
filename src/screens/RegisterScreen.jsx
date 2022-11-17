import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const RegisterScreen = ({}) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [user, setUser] = useState({ value: "", error: "" });
  const [confirmpassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });

  const _onRegisterPressed = () => {
    console.log("RegistroIniciado");
    // navigation.navigate("Dashboard");

    if (email.value === "" || password.value === "") {
      setEmail({ ...email, error: "Entre com um e=mail válido" });
      setPassword({ ...password, error: "Entre com uma senha" });
      return false;
    }
    CadastrarUsuario();
  };

  async function CadastrarUsuario() {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((value) => {
        console.log("Cadastrado com sucesso!" + value.user.uid);
      })
      .catch((error) => console.log(error));
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: "", error: "" })}
        error={!!email.error}
        errorText={email.error}
        style={styles.input}
      />

      <TextInput
        label="Usuário"
        returnKeyType="next"
        value={user.value}
        onChangeText={(text) => setUser({ value: "", error: "" })}
        error={!!user.error}
        errorText={user.error}
        style={styles.input}
      />

      <TextInput
        label="Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: "", error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        label="Confirmar senha"
        returnKeyType="done"
        value={confirmpassword.value}
        onChangeText={(text) => setConfirmPassword({ value: "", error: "" })}
        error={!!confirmpassword.error}
        errorText={confirmpassword.error}
        secureTextEntry
        style={styles.input}
      />

      <Button mode="contained" onPress={_onRegisterPressed} style={styles.but}>
        Cadastrar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginBottom: 24,
    paddingHorizontal: 26,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#93BFB7",
  },
  input: {
    width: "75%",
    marginTop: 10,
  },
  label: {
    color: "black",
  },
  but: {
    marginTop: 10,
  },
});
