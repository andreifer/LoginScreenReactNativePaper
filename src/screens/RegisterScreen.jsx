import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, HelperText, TextInput } from "react-native-paper";
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
    let erro = false;
    // navigation.navigate("Dashboard");
    if (email.value === "") {
      setEmail({ ...email, error: "Entre com um e=mail válido" });
      erro = true;
    }
    if (user.value === "") {
      setUser({ ...user, error: "Entre com um usuário valido" });
      erro = true;
    }
    if (password.value === "") {
      setPassword({ ...password, error: "Senha é obrigatório" });
      erro = true;
    }
    if (confirmpassword.value === "") {
      setConfirmPassword({ ...confirmpassword, error: "Confirme sua senha" });
      erro = true;
    }
    if (!erro) {
      CadastrarUsuario();
    }
  };

  async function CadastrarUsuario() {
    await createUserWithEmailAndPassword(auth, email.value, password.value, user.value, confirmpassword.value)
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
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        style={styles.input}
      />
      <HelperText type="error" visible={!!email.error}>
        Digite um email válido
      </HelperText>
      <TextInput
        label="Usuário"
        returnKeyType="next"
        value={user.value}
        onChangeText={(text) => setUser({ value: text, error: "" })}
        error={!!user.error}
        errorText={user.error}
        style={styles.input}
      />
      <HelperText type="error" visible={!!user.error}>
        Digite um usuário
      </HelperText>
      <TextInput
        label="Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        style={styles.input}
      />
      <HelperText type="error" visible={!!password.error}>
        Digite uma Senha
      </HelperText>
      <TextInput
        label="Confirmar senha"
        returnKeyType="done"
        value={confirmpassword.value}
        onChangeText={(text) => setConfirmPassword({ value: text, error: "" })}
        error={!!confirmpassword.error}
        errorText={confirmpassword.error}
        secureTextEntry
        style={styles.input}
      />
      <HelperText type="error" visible={!!confirmpassword.error}>
        Digite sua senha novamente
      </HelperText>
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
