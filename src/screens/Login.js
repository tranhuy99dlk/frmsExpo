import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
const { height, width } = Dimensions.get("window");
import { colors, parameters } from "../global/styles";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      nof: "",
    };
  }
  onLogin = () => {
    if (
      this.state.email == "1" &&
      this.state.password == "1"
    ) {
      this.props.navigation.navigate("HomeScreen");
    } else {
      this.setState({
        nof: "Email hoặc mật khẩu không đúng",
      });
    }
  };
  onSignUp = () => {
    this.props.navigation.navigate("SignUpScreen");
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/fireStation.png")}
        />
        <TextInput
          style={{
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
          }}
          onChangeText={(email) => this.setState({ email })}
          placeholder={"Email"}
          placeholderTextColor={"grey"}
          underlineColorAndroid="transparent"
        ></TextInput>
        <TextInput
          style={{
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
          }}
          onChangeText={(password) => this.setState({ password })}
          placeholder={"Password"}
          placeholderTextColor={"grey"}
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        ></TextInput>
        <Text style={{ color: "red" }}>{this.state.nof}</Text>

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => this.onLogin()}
        >
          <Text style={styles.textlogin}>Đăng Nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => this.onSignUp()}
        >
          <Text style={styles.textlogin}>Đăng Ký</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
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
  textlogin: {
    textAlign: "center",
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 20,

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

});
