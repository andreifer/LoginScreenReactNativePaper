import { useState } from "react";
import { View } from "react-native";
import { Button, Paragraph, TextInput } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
    const [Usuario, setUsuario] = useState("");
    const [text, setText] = useState("");
  return (
    <View>
      <Paragraph>Login</Paragraph>
      <TextInput
        label="Usuário"
        value={Usuario}
        onChangeText={(Usuario) => setUsuario(Usuario)}
      />
      <TextInput
        label="Senha"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate("HomeNavigation")}
      >
        Fazer Login
      </Button>
    </View>
  );
};
