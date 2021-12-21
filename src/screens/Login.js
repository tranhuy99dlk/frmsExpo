import axios from "axios";
import React, { Component, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Alert,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import { colors, parameters } from "../global/styles";
const { height, width } = Dimensions.get("window");

export default function Login({ navigation }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    checkLogin: 0,
  });
  const onSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email: user.username,
        password: user.password,
      });
      if (res) return navigation.navigate("HomeScreen");
    } catch (error) {
      alert("Email hoặc mật khẩu không đúng");
    }
  };
  const onSignUp = async () => {
    navigation.navigate("SignUpScreen");
  };



  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/fireStation.png")}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="black"
        underlineColorAndroid="transparent"
        style={styles.txtInput}
        onChangeText={(username) => setUser({ ...user, username: username })}
      />
      <TextInput
        placeholder="Mật khẩu"
        underlineColorAndroid="transparent"
        placeholderTextColor="black"
        secureTextEntry={true}
        style={styles.txtInput}
        onChangeText={(password) => setUser({ ...user, password: password })}
      />
      <TouchableOpacity onPress={onSubmit} style={styles.btnLogin}>
        <Text style={styles.txtLogin}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSignUp} style={styles.btnLogin}>
        <Text style={styles.txtLogin}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 140, 82,1)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 50,
  },
  txtInput: {
    width: 300,
    height: 40,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 15,
    paddingTop: -10,
    backgroundColor: "#ffff",
    color: "black",
    marginHorizontal: 25,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#bbb",
  },
  btnLogin: {
    width: 300,
    height: 45,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: colors.firebrick,
    marginTop: 25,
    borderColor: "#ffff",
    justifyContent: "center",
  },
  txtLogin: {
    textAlign: "center",
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
