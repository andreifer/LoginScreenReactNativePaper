import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";

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
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        label="Usuário"
        returnKeyType="next"
        value={user.value}
        onChangeText={(text) => setUser({ value: text, error: "" })}
        error={!!user.error}
        errorText={user.error}
        autoCapitalize="none"
        autoCompleteType="usuario"
        textContentType="usuario"
        keyboardType="usuario"
        style={styles.input}
      />

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
